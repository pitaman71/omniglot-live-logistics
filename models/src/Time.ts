// models/src/Time.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
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
    asString(format?: Introspection.Format) {
        return format?.standard.toLowerCase() === 'iso8601' && format?.definition.toLowerCase() === 'time' ? this.asISO() : format !== undefined ? undefined : new class {
            from(text: string): null|Value { 
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
                    // error = `Parsing failed, expectd format HH:MM[:SS] [+|-]HH:MM [AM|PM]`
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
                return {
                    hour: luxon.hour,
                    minute: luxon.minute,
                    second: luxon.second,
                    zone: luxon.zone
                }
            },
            to(value: Value|null, options?: { onError?: (error: Introspection.Parsing.Error) => void }) {
                if(value === null) return null;
                const luxon = Luxon.DateTime.fromObject(value);
                return luxon.toISO();
            }
        
        }
    }

    asNumber(dimension?: Introspection.Measurements.Dimension) {
        const domain = this;
        if(dimension === undefined || dimension === Introspection.Measurements.COMMON_DIMENSIONS.timeSinceMidnight) {
            return {
                dimension: dimension || Introspection.Measurements.COMMON_DIMENSIONS.timeSinceMidnight,
                to: (value: Value|null):number|null => {
                    if(value === null) return null;
                    if(value.hour === undefined || value.minute === undefined)
                        return null;
                        
                    let hours = value.hour;
                    
                    // Handle meridian (am/pm) conversion
                    if(value.meridian === 'am') {
                        // 12 AM should be 0 hours
                        hours = value.hour === 12 ? 0 : value.hour;
                    } else if(value.meridian === 'pm') {
                        // 12 PM stays as 12, all other PM times add 12 hours
                        hours = value.hour === 12 ? 12 : value.hour + 12;
                    }
                    
                    let seconds = hours * 3600;  // Convert hours to seconds
                    seconds += 60 * value.minute; // Add minutes converted to seconds
                    
                    // Handle timezone offset if present
                    if(value.zone?.minutes !== undefined) {
                        seconds += 60 * value.zone.minutes;
                    }
                    
                    return seconds;
                }, from: (seconds: number|null) => {
                    if(seconds === null) return null;
                    return {
                        hour: Math.floor(seconds / 3600),
                        minute: Math.floor((seconds % 3600) / 60),
                        second: seconds % 60
                    }
                }
            }   
        }
        return undefined;
    }    
}
export const Domain = new _Domain(makePath('Domain'));
directory.add(Domain);
export default Value;
