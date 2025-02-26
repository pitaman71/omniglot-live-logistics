// models/src/Duration.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import cmp from './cmp';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.Duration.${path}`;

export interface Value {
    days?: number,
    hours?: number,
    minutes?: number,
    seconds?: number
}

/**
 * Measurement between two moments in time.
 */
class _Domain extends Values.AggregateDomain<Value> {
    constructor(path: string) {
        super(path,{
            days: Values.TheNumberDomain,
            hours: Values.TheNumberDomain,
            minutes: Values.TheNumberDomain,
            seconds: Values.TheNumberDomain
        })
    }
    asString(format?: string) { return new class {
        from(text: string, options?: { onError: (err: any) => void }): null|Value {
            const parsed = text.match(/^((\d+)d)?((\d+)h)?((\d+)m)?((\d+)s)?/i);
            let days: number|undefined;
            let hours: number|undefined;
            let minutes: number|undefined;
            let seconds: number|undefined;
            if(parsed) {
                days = Number.parseInt(parsed[2]);
                hours = Number.parseInt(parsed[4]);
                minutes = Number.parseInt(parsed[6]);
                seconds = Number.parseInt(parsed[8]);
            } else {
                if(options?.onError)
                    options.onError(`Expected format #d#h#m#s`)
                return null;
            }
            return { days, hours, minutes, seconds };
        }
        to(value: Value): string {
            return [
                value.days === undefined ? '' : `${value.days.toString()}d`,
                value.hours === undefined ? '' : `${value.hours.toString()}h`,
                value.minutes === undefined ? '' : `${value.minutes.toString()}m`,
                value.seconds === undefined ? '' : `${value.seconds.toString()}s`
            ].join('');
        }
    } }
    cmp(a: Value, b:Value): undefined|-1|0|1 {
        return cmp(this.toSeconds(a), this.toSeconds(b))
    }
    toLuxon(duration: Value): Luxon.Duration {
        return Luxon.Duration.fromObject(duration);
    }
    toSeconds(duration: Value): number {
        return (duration.seconds || 0) +
            (duration.minutes ? 60 * duration.minutes : 0) +
            (duration.hours ? 3600 * duration.hours : 0) + 
            (duration.days ? 24 * 3600 * duration.days : 0);
    }
    fromSeconds(seconds: number) {
        return {
            days: Math.floor(seconds / (24 * 3600)),

            hours: Math.floor(seconds / 3600) % 24,
            minutes: Math.floor(seconds / 60) % 60,
            seconds: Math.floor(seconds % 60)
        }
    }
}
export const Domain = new _Domain(makePath('Domain'));
directory.add(Domain);
export default Value;
