// models/src/Interval.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { Value as _DateTime, Domain as DateTimeDomain } from './DateTime';
import { Value as _Duration, Domain as DurationDomain } from './Duration';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.Interval.${path}`;

export interface Value {
    start?: _DateTime,
    end?: _DateTime,
    duration?: _Duration
}

/**
 * A pair of points in time denoting every moment between those two
 * points, inclusive of both endpoints.
 */
export const Domain = new class _Domain extends Values.AggregateDomain<Value> {
    constructor() {
        super(makePath(`IntervalDomain`),{
            start: DateTimeDomain,
            end: DateTimeDomain,
            duration: DurationDomain
        });
    }
    asString(format?: Introspection.Format) { 
        const domain = this;
        return format?.standard.toLowerCase() === 'iso8601' && format?.definition.toLowerCase() === 'interval' ? this.asISO() : format !== undefined ? undefined : {
            from(text: string): null|Value {
                let luxon: Luxon.Interval|undefined;
                luxon = Luxon.Interval.fromISO(text);
                if(!luxon.isValid) {
                    return null;
                }
                const start = DateTimeDomain.asLuxon().from(luxon.start) || undefined;
                const end = DateTimeDomain.asLuxon().from(luxon.end) || undefined;
                if(!start || !end) return null;
                return domain.from(start, end)
            },
            to(value: Value): string {
                const luxon = domain.asLuxon().to(value);
                if(!luxon) return '';
                return luxon.toISO();
            }
        } 
    }
    asISO() {
        const domain = this;
        return {
            from(isoString: string|null, options?: { onError?: (error: Introspection.Parsing.Error) => void }) {
                if(isoString === null) return null;
                const luxon = Luxon.Interval.fromISO(isoString);
                if(!luxon.isValid) {
                    if(options?.onError) options.onError({ kind: 'syntaxError', tokenType: 'ISO 8601 date string'})
                    return null;
                }
                return {
                    start: DateTimeDomain.asLuxon().from(luxon.start) || undefined,
                    end: DateTimeDomain.asLuxon().from(luxon.end) || undefined
                }
            },
            to(value: Value|null, options?: { onError?: (error: Introspection.Parsing.Error) => void }) {
                if(value === null || value.start === undefined || value.end === undefined) return null;
                const start_ = DateTimeDomain.asLuxon().to(value.start);
                const end_ = DateTimeDomain.asLuxon().to(value.end);
                if(!start_ || !end_) return null;
                const luxon = Luxon.Interval.fromDateTimes(start_, end_);
                return luxon.toISO() || null;
            }
        
        }
    }

    asEnumeration(maxCount: number) { return undefined; }
    cmp(a: Value, b:Value): undefined|-1|0|1 {
        let code;
        if(a.start === undefined || b.start === undefined) {
            return Introspection.Comparison.cmp(a.start, b.start);
        }
        if(a.end === undefined || b.end === undefined) {
            return Introspection.Comparison.cmp(a.end, b.end);
        }
        code = DateTimeDomain.cmp(a.start, b.start);
        if(code != 0) return code;
        code = DateTimeDomain.cmp(a.end, b.end);
        return code;    
    }

    from(start: _DateTime|undefined|null, end: _DateTime|undefined|null, duration?: _Duration|null): null|Value {
        if(!start) {
            // skip
        } else if(!end && !!duration) {
            const luxon = DateTimeDomain.asLuxon().to(start)?.plus(DurationDomain.toLuxon(duration)) || null;
            end = DateTimeDomain.asLuxon().from(luxon) || undefined;
        } else if(!!end  && !duration) {
            const s = DateTimeDomain.asLuxon().to(start);
            const e = DateTimeDomain.asLuxon().to(end);
            duration = s && e ? e.diff(s) : undefined;
        }
        return {
            start: start || undefined, duration: duration || undefined, end: end || undefined
        }
    }

    asLuxon() {
        const domain = this;
        return {
            from(luxon: Luxon.Interval) { 
                const start = DateTimeDomain.asLuxon().from(luxon.start);
                const end = DateTimeDomain.asLuxon().from(luxon.end);
                return { start, end };
            },
            to(value: Value) {
                if(!value.start || !value.end) return null;
                const start_ = DateTimeDomain.asLuxon().to(value.start);
                const end_ = DateTimeDomain.asLuxon().to(value.end);
                if(!start_ || !end_) return null;
                return Luxon.Interval.fromDateTimes(
                    start_, 
                    end_
                );
            }
        }
    }
}
directory.add(Domain);
export default Value;
