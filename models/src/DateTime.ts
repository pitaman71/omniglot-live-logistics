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
    asString(format?: Introspection.Format) {
        const domain = this;
        return format?.standard.toLowerCase() === 'iso8601' && format?.definition.toLowerCase() === 'datetime' ? this.asISO() : format !== undefined ? undefined : new class {
            from(text: string|null): null|Value {
                if(text === null) return null;
                return domain.fromISOString(text);
            }
            to(value: Value|null): string|null { 
                if(value === null) return null;
                return domain.asLuxon().to(value)?.toISO() || null;
            }
        }
    };

    asISO() {
        const domain = this;
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

    asLuxon() { 
        const domain = this;
        return {
            from(luxon: Luxon.DateTime|null): Value|null { 
                if(luxon === null) return null;
                return { date: {
                    year: luxon.year, 
                    month: luxon.month, 
                    day: luxon.day
                 }, time: {
                    hour: luxon.hour,
                    minute: luxon.minute,
                    second: luxon.second
                 } };
            }, to(value: Value|null): Luxon.DateTime|null {
                if(value === null) return null;
                return Luxon.DateTime.fromObject({
                    year: value.date?.year,
                    month: value.date?.month,
                    day: value.date?.day,
                    hour: value.time?.hour,
                    minute: value.time?.minute,
                    second: value.time?.second
                })
            }
        };
    }
    fromISOString(text: string): null|Value {
        return this.asLuxon().from(Luxon.DateTime.fromISO(text));
    }
    fromJSDate(date: Date): null|Value {
        return this.asLuxon().from(Luxon.DateTime.fromJSDate(date));
    }
}
export const Domain = new _Domain(makePath('Domain'));

directory.add(Domain);
export default Value;
