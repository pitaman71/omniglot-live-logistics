// models/src/DateTime.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import _Date, { Domain as DateDomain } from './Date';
import _Time, { Domain as TimeDomain } from './Time';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.DateTime.${path}`;

export interface _DateTime {
    date?: _Date;
    time?: _Time;
}

/**
 * Calendar date and time of day
 */
class _Domain extends Values.AggregateDomain<_DateTime> {
    constructor(path: string) {
        super(path,{
            date: DateDomain,
            time: TimeDomain
        })
    }
    asString(format?: string) {
        const domain = this;
        return new class {
            from(text: string): null|_DateTime {
                return domain.fromISOString(text);
            }
            to(value: _DateTime) { 
                return domain.asLuxon().to(value).toISO();
            }
        }
    };

    asLuxon() { 
        const domain = this;
        return {
            from(luxon: Luxon.DateTime): _DateTime|null { 
                return { date: {
                    year: luxon.year, 
                    month: luxon.month, 
                    day: luxon.day
                 }, time: {
                    hour: luxon.hour,
                    minute: luxon.minute,
                    second: luxon.second
                 } };
            }, to(value: _DateTime): Luxon.DateTime {
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
    fromISOString(text: string): null|_DateTime {
        return this.asLuxon().from(Luxon.DateTime.fromISO(text));
    }
    fromJSDate(date: Date): null|_DateTime {
        return this.asLuxon().from(Luxon.DateTime.fromJSDate(date));
    }
}
export const Domain = new _Domain(makePath('Domain'));

directory.add(Domain);
export default _DateTime;
