// models/src/Date.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.Date.${path}`;

export interface _Date {
    year?: number;
    month?: number;
    day?: number;
}

/**
 * A calendar date
 */
class _Domain extends Values.AggregateDomain<_Date> {
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
            from(text: string): null|Partial<_Date> {
                const luxon = Luxon.DateTime.fromISO(text);
                if(!luxon.isValid) {
                    return null;
                } else {
                    return {
                            year: luxon.year,
                            month: luxon.month,
                            day: luxon.day
                    }
                }
            },
            to(value: Partial<_Date>): string {
                return domain.asLuxon().to(value)?.toISODate() || '';
            }
        }
    }
    asLuxon() { return {
            from(luxon: Luxon.DateTime): _Date|null { 
                return { 
                    year: luxon.year,
                    month: luxon.month,
                    day: luxon.day
                } 
            },
            to(value: _Date): Luxon.DateTime {
                return Luxon.DateTime.fromObject({ year: value.year, month: value.month, day: value.day })
            }
        }
    }
    asJSDate() { 
        const domain = this;
        return {
            from(date: globalThis.Date) { return domain.asLuxon().from(Luxon.DateTime.fromJSDate(date))},
            to(value: _Date) { return domain.asLuxon().to(value)?.toJSDate() }
        }
    }
    fromBlank() { return {} }
    
}
export const Domain = new _Domain(makePath('Domain'));
directory.add(Domain);
export default _Date;
