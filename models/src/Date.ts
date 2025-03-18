// models/src/Date.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.Date.${path}`;

export interface Value {
    year?: number;
    month?: number;
    day?: number;
}

/**
 * A calendar date
 */
class _Domain extends Values.AggregateDomain<Value> {
    constructor(path: string) {
        super(path, {
            year: new Values.RangeDomain(makePath('Domain.year'), 0, undefined, 1),
            month: new Values.RangeDomain(makePath('Domain.month'), 1, 12, 1),
            day: new Values.RangeDomain(makePath('Domain.day'),1, 31, 0)
        }, ['year', 'month', 'day' ])
    }
    asString(format?: string) { 
        const domain = this;
        return {
            from(text: string, options?: { onError: (err: any) => void }): null|Partial<Value> {
                const luxon = Luxon.DateTime.fromISO(text);
                if(!luxon.isValid) {
                    if(options?.onError) options.onError(luxon.invalidReason)
                    return null;
                } else {
                    return {
                            year: luxon.year,
                            month: luxon.month,
                            day: luxon.day
                    }
                }
            },
            to(value: Partial<Value>): string {
                return domain.asLuxon().to(value)?.toISODate() || '';
            }
        }
    }
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
    asLuxon() { return {
            from(luxon: Luxon.DateTime): Value|null { 
                return { 
                    year: luxon.year,
                    month: luxon.month,
                    day: luxon.day
                } 
            },
            to(value: Value): Luxon.DateTime {
                return Luxon.DateTime.fromObject({ year: value.year, month: value.month, day: value.day })
            }
        }
    }
    asJSDate() { 
        const domain = this;
        return {
            from(date: globalThis.Date) { return domain.asLuxon().from(Luxon.DateTime.fromJSDate(date))},
            to(value: Value) { return domain.asLuxon().to(value)?.toJSDate() }
        }
    }
    fromBlank() { return {} }
    
}
export const Domain = new _Domain(makePath('Domain'));
directory.add(Domain);
export default Value;
