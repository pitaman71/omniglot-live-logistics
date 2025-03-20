// models/src/Duration.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import * as Introspection from 'typescript-introspection';
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
    asISO() {
        const domain = this;
        return {
            from(isoString: string|null, options?: { onError?: (error: Introspection.Parsing.Error) => void }) {
                if(isoString === null) return null;
                const luxon = Luxon.Duration.fromISO(isoString);
                if(!luxon.isValid) {
                    if(options?.onError) options.onError({ kind: 'syntaxError', tokenType: 'ISO 8601 date string'})
                    return null;
                }
                return {
                    days: luxon.days,
                    hours: luxon.hours,
                    minute: luxon.minutes,
                    seconds: luxon.seconds
                }
            },
            to(value: Value|null, options?: { onError?: (error: Introspection.Parsing.Error) => void }) {
                if(value === null) return null;
                const luxon = Luxon.Duration.fromObject(value);
                return luxon.toISO() || null;
            }
        
        }
    }

    asString(format?: Introspection.Format) { 
        return format?.standard.toLowerCase() === 'iso8601' && format?.definition.toLowerCase() === 'duration' ? this.asISO() : format !== undefined ? undefined : new class {
            from(text: string|null): null|Value {
                if(text === null) return null;
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
                    return null;
                }
                return { days, hours, minutes, seconds };
            }
            to(value: Value|null): string|null {
                if(value === null) return null;
                return [
                    value.days === undefined ? '' : `${value.days.toString()}d`,
                    value.hours === undefined ? '' : `${value.hours.toString()}h`,
                    value.minutes === undefined ? '' : `${value.minutes.toString()}m`,
                    value.seconds === undefined ? '' : `${value.seconds.toString()}s`
                ].join('');
            }
        } }
    cmp(a: Value, b:Value): undefined|-1|0|1 {
        return Introspection.Comparison.cmp(this.asNumber()!.to(a), this.asNumber()!.to(b))
    }
    toLuxon(duration: Value): Luxon.Duration {
        return Luxon.Duration.fromObject(duration);
    }
    asNumber(dimension?: Introspection.Measurements.Dimension) {
        const domain = this;
        if(dimension === undefined || dimension === Introspection.Measurements.COMMON_DIMENSIONS.duration) {
            return {
                dimension: dimension || Introspection.Measurements.COMMON_DIMENSIONS.duration,
                to(duration: Value|null): number|null {
                    if(duration === null) return null;
                    return (duration.seconds || 0) +
                        (duration.minutes ? 60 * duration.minutes : 0) +
                        (duration.hours ? 3600 * duration.hours : 0) + 
                        (duration.days ? 24 * 3600 * duration.days : 0);
                },
                from(seconds: number|null) {
                    if(seconds === null) return null;
                    return {
                        days: Math.floor(seconds / (24 * 3600)),

                        hours: Math.floor(seconds / 3600) % 24,
                        minutes: Math.floor(seconds / 60) % 60,
                        seconds: Math.floor(seconds % 60)
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
