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
    asString(format?: string) { 
        const domain = this;
        return {
            from(text: string) {
                let luxon: Luxon.Interval|undefined;
                luxon = Luxon.Interval.fromISO(text);
                if(!luxon.isValid) {
                    return null;
                }
                const start = luxon.start && DateTimeDomain.asLuxon().from(luxon.start) || undefined;
                const end = luxon.end && DateTimeDomain.asLuxon().from(luxon.end) || undefined;
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
            date() { return undefined },
            dateTime()  { return undefined },
            time()  { return undefined },
            duration()  { return undefined },
            recurrence()  { return undefined },
            interval() {
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
                        const luxon = Luxon.Interval.fromDateTimes(
                            DateTimeDomain.asLuxon().to(value.start), 
                            DateTimeDomain.asLuxon().to(value.end));
                        return luxon.toISO() || null;
                    }
                
                }
            }
        }
    }

    asEnumeration(maxCount: number) { return undefined; }
    cmp(a: Value, b:Value): undefined|-1|0|1 {
        let code = Introspection.Comparison.cmp(a?.start, b?.start, DateTimeDomain.cmp);
        if(code != 0) return code;
        code = Introspection.Comparison.cmp(a?.end, b?.end, DateTimeDomain.cmp);
        return code;        
    }

    from(start: _DateTime|undefined|null, end: _DateTime|undefined|null, duration?: _Duration|null): null|Value {
        let text: string|undefined;
        let luxon: Luxon.Interval|undefined;
        if(!start) {
            // skip
        } else if(!end && !!duration) {
            end = DateTimeDomain.asLuxon().from(DateTimeDomain.asLuxon().to(start)?.plus(DurationDomain.toLuxon(duration))) || undefined;
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
                const start = luxon.start ? DateTimeDomain.asLuxon().from(luxon.start) : undefined;
                const end = luxon.end ? DateTimeDomain.asLuxon().from(luxon.end) : undefined;
                return { start, end };
            },
            to(value: Value) {
                if(!value.start || !value.end) return null;
                return Luxon.Interval.fromDateTimes(
                    DateTimeDomain.asLuxon().to(value.start), 
                    DateTimeDomain.asLuxon().to(value.end)
                );
            }
        }
    }
}
directory.add(Domain);
export default Value;
