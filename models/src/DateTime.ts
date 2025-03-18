// models/src/DateTime.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import _Date, { Domain as DateDomain } from './Date';
import _Time, { Domain as TimeDomain } from './Time';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.DateTime.${path}`;

export interface Value {
    date?: _Date;
    time?: _Time;
}

/**
 * Calendar date and time of day
 */
class _Domain extends Values.AggregateDomain<Value> {
    constructor(path: string) {
        super(path,{
            date: DateDomain,
            time: TimeDomain
        })
    }
    asString(format?: string) {
        const domain = this;
        return new class {
            from(text: string|null, options?: { onError: (err: any) => void }): null|Value {
                if(text === null) return null;
                return domain.fromISOString(text, options);
            }
            to(value: Value|null) { 
                if(value === null) return null;
                return domain.asLuxon().to(value).toISO() || '';
            }
        }
    };

    asISO() {
        const domain = this;
        return {
            time() { return undefined },
            dateTime()  { return undefined },
            duration()  { return undefined },
            interval()  { return undefined },
            recurrence()  { return undefined },
            date() {
                return {
                    from(isoString: string|null, options?: { onError?: (error: Introspection.Parsing.Error) => void }) {
                        if(isoString === null) return null;
                        const luxon = Luxon.DateTime.fromISO(isoString);
                        if(!luxon.isValid) {
                            if(options?.onError) options.onError({ kind: 'syntaxError', tokenType: 'ISO 8601 date string'})
                            return null;
                        }
                        return domain.asLuxon().from(luxon);
                    },
                    to(value: Value|null, options?: { onError?: (error: Introspection.Parsing.Error) => void }) {
                        if(value === null) return null;
                        return domain.asLuxon().to(value)?.toISODate() || null;
                    }                
                }
            }
        }
    }

    asLuxon() { 
        const domain = this;
        return {
            from(luxon: Luxon.DateTime): Value|null { 
                return { date: {
                    year: luxon.year, 
                    month: luxon.month, 
                    day: luxon.day
                 }, time: {
                    hour: luxon.hour,
                    minute: luxon.minute,
                    second: luxon.second
                 } };
            }, to(value: Value, options?: { onError: (err: any) => void }): Luxon.DateTime {
                const result = Luxon.DateTime.fromObject({
                    year: value.date?.year,
                    month: value.date?.month,
                    day: value.date?.day,
                    hour: value.time?.hour,
                    minute: value.time?.minute,
                    second: value.time?.second
                });
                if(!result.isValid && options?.onError)
                    options.onError(result.invalidExplanation)
                return result;
            }
        };
    }
    fromISOString(text: string, options?: { onError: (err: any) => void }): null|Value {
        const luxon = Luxon.DateTime.fromISO(text);
        if(!luxon.isValid && options?.onError)
            options.onError(luxon.invalidExplanation)
        return this.asLuxon().from(luxon);
    }
    fromJSDate(date: Date): null|Value {
        return this.asLuxon().from(Luxon.DateTime.fromJSDate(date));
    }
}
export const Domain = new _Domain(makePath('Domain'));

directory.add(Domain);
export default Value;
