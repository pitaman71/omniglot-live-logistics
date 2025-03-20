// models/src/Zone.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import * as tzdata from 'tzdata';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import * as Introspection from 'typescript-introspection';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.Zone.${path}`;

export interface Value {
    name?: string;
    short?: string;
    long?: string;
    minutes?: number;
}

/**
 * A time zone
 */
class _Domain extends Values.AggregateDomain<Value> {
    constructor(path: string) {
        super(path,{
            name: Values.TheStringDomain,
            short: Values.TheStringDomain,
            long: Values.TheStringDomain,
            minutes: Values.TheNumberDomain
        })
    }
    asString(format?: Introspection.Format) {
        const domain = this;
        return format !== undefined ? undefined : {
            from(text: string): Partial<Value> { return domain.getByName(text) },
            to(value: Partial<Value>): string { return value.name || '' }
        };
    }
    asEnumeration(maxCount: number) {
        const tzNames = Object.getOwnPropertyNames(tzdata.zones);
        const luxons = tzNames.map(tzName => Luxon.DateTime.local({ zone: tzName }));
        const domain = this;
        return new class {
            *forward(): Generator<Value> {
                luxons.sort((a,b) => a.offset < b.offset ? -1 : a.offset > b.offset ? +1 : 0);
                for(let luxon of luxons) {
                    yield domain.fromLuxon(luxon)
                }
            }
            *backward(): Generator<Value> {
                luxons.sort((a,b) => a.offset > b.offset ? -1 : a.offset < b.offset ? +1 : 0);
                for(let luxon of luxons) {
                    yield domain.fromLuxon(luxon)
                }
            }
        } 
    }
    cmp(a: Value, b:Value): undefined|-1|0|1 {
        let code = Introspection.Comparison.cmp(a.minutes, b.minutes);
        if(code !== 0) return code;
        code = Introspection.Comparison.cmp(a.name, b.name);
        return code;
    }

    getLocal() {
        return this.fromLuxon(Luxon.DateTime.local());
    }
    getByName(name: string): Value {
        const luxon = Luxon.DateTime.local({ zone: name });
        return {
            name: luxon.zoneName,
            minutes: luxon.offset,
            short: luxon.offsetNameShort,
            long: luxon.offsetNameLong
        }
    }
    fromLuxon(luxon: Luxon.DateTime): Value {
        return {
            name: luxon.zoneName || undefined,
            minutes: luxon.offset,
            short: luxon.offsetNameShort || undefined,
            long: luxon.offsetNameLong || undefined
        }
    }
}
export const Domain = new _Domain(makePath('Domain'));
directory.add(Domain);
export default Value;
