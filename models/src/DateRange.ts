// models/src/DateRange.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { Value as _Date, Domain as DateDomain } from './Date';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.DateRange.${path}`;

interface Value {
    from: _Date,
    to: _Date
}
export const Domain = new class _Domain extends Values.AggregateDomain<Value> {
    constructor() {
        super(makePath('Domain'),{
            from: DateDomain,
            to: DateDomain
        });
    }

    asISO() {
        const domain = this;
        return {
            date() { return undefined },
            dateTime()  { return undefined },
            time()  { return undefined },
            duration()  { return undefined },
            recurrence()  { return undefined },
            interval() { return undefined },
            dateRange() {
                return {
                    from(isoString: string|null, options?: { onError?: (error: Introspection.Parsing.Error) => void }) {
                        if(isoString === null) return null;
                        const luxon = Luxon.Interval.fromISO(isoString);
                        if(!luxon.isValid) {
                            if(options?.onError) options.onError({ kind: 'syntaxError', tokenType: 'ISO 8601 date string'})
                            return null;
                        }
                        return {
                            from: DateDomain.asLuxon().from(luxon.start) || undefined,
                            to: DateDomain.asLuxon().from(luxon.end) || undefined
                        }
                    },
                    to(value: Value|null, options?: { onError?: (error: Introspection.Parsing.Error) => void }) {
                        if(value === null || value.from === undefined || value.to === undefined) return null;
                        const luxon = Luxon.Interval.fromDateTimes(
                            DateDomain.asLuxon().to(value.from), 
                            DateDomain.asLuxon().to(value.to));
                        return luxon.toISO() || null;
                    }
                
                }
            }
        }
    }
}

directory.add(Domain);
export default Value;
