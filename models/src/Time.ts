// models/src/Time.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import _Meridian, { Domain as MeridianDomain} from './Meridian';
import _Zone, { Domain as ZoneDomain } from './Zone';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.Time.${path}`;

export interface Value {
    hour?: number;
    minute?: number;
    second?: number;
    meridian?: _Meridian;
    zone?: _Zone;
}

/**
 * Time of day
 */
class _Domain extends Values.AggregateDomain<Value> {
    constructor(path: string) {
        super(path,{
            hour: new Values.RangeDomain(`${path}.hour`, 0, 23, 1),
            minute: new Values.RangeDomain(`${path}.minute`,0, 59, 1),
            second: new Values.RangeDomain(`${path}.second`,0, 59, 1),
            meridian: MeridianDomain,
            zone: ZoneDomain
        })
    }
    asString() {
        return new class {
            from(text: string, options?: { onError: (err: any) => void }): null|Value { 
                let hour = 0;
                let minute = 0;
                let second: number|undefined;
                let meridian: Value['meridian']|undefined;
                let zone: undefined|_Zone;
                const parsed = text.match(/^(\d+):(\d+)(:(\d+))?\s*(am|pm)?\s+(.+)?/i)
                if(parsed) {
                    if(parsed[3] !== undefined) second = Number.parseInt(parsed[3]);
                    if(parsed[2] !== undefined) minute = Number.parseInt(parsed[2]);
                    if(parsed[1] !== undefined) hour = Number.parseInt(parsed[1]);
                    if(parsed[5] !== undefined) meridian = MeridianDomain.asString()?.from(parsed[5]) || undefined;
                    if(parsed[6] !== undefined && parsed[6] !== undefined) {
                        zone = ZoneDomain.getByName(parsed[6])
                    }
                } else {
                    if(options?.onError)
                        options.onError(`Parsing failed, expectd format HH:MM[:SS] [+|-]HH:MM [AM|PM]`);
                    return null;
                }
                return { hour, minute, second, meridian, zone };
            }
            to(value: Value): string {
                const hour = value.hour;
                const minute = value.minute;
                if(hour === undefined || minute === undefined) return '';
                let result = `${hour.toString() || '00'}:${minute.toString() || '00'}${!value.meridian ? '' : value.meridian.toString().toUpperCase()}`;
                if(value.zone !== undefined) {
                    result += ' ';
                    result += value.zone.name;
                }
                return result;        
            }
        };
    }

    toSeconds(value: Value) {
        if(value.hour === undefined || value.minute === undefined)
            return undefined;
        let seconds = 0;
        seconds += 3600 * (value.meridian === 'am' ? value.hour % 12 : value.meridian === 'pm' ? value.hour - 12 : value.hour);
        seconds += 60 * value.minute;
        if(value.zone?.minutes !== undefined) {
            seconds += 60 * value.zone.minutes;
        }
        return seconds;
    }   
    fromSeconds(seconds: number, pm?: boolean, utcOffset?: { hours: number, minutes: number, west: boolean }) {
        return {
            hour: Math.floor(seconds / 3600),
            minute: Math.floor((seconds % 3600) / 60),
            second: seconds % 60,
            pm,
            utcOffset 
        }
    }
}
export const Domain = new _Domain(makePath('Domain'));
directory.add(Domain);
export default Value;
