// models/src/Zone.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Luxon from 'luxon';
import * as tzdata from 'tzdata';
import { Values } from '@pitaman71/omniglot-live-data';
import cmp from './cmp';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.Zone.${path}`;

export interface _Zone {
    name?: string;
    short?: string;
    long?: string;
    minutes?: number;
}

/**
 * A time zone
 */
class _Domain extends Values.AggregateDomain<_Zone> {
    constructor(path: string) {
        super(path,{
            name: Values.TheStringDomain,
            short: Values.TheStringDomain,
            long: Values.TheStringDomain,
            minutes: Values.TheNumberDomain
        })
    }
    asString(format?: string) { 
        const domain = this;
        return {
            from(text: string): Partial<_Zone> { return domain.getByName(text) },
            to(value: Partial<_Zone>): string { return value.name || '' }
        };
    }
    asEnumeration(maxCount: number) {
        const tzNames = Object.getOwnPropertyNames(tzdata.zones);
        const luxons = tzNames.map(tzName => Luxon.DateTime.local({ zone: tzName }));
        const domain = this;
        return new class {
            *forward(): Generator<_Zone> {
                luxons.sort((a,b) => a.offset < b.offset ? -1 : a.offset > b.offset ? +1 : 0);
                for(let luxon of luxons) {
                    yield domain.fromLuxon(luxon)
                }
            }
            *backward(): Generator<_Zone> {
                luxons.sort((a,b) => a.offset > b.offset ? -1 : a.offset < b.offset ? +1 : 0);
                for(let luxon of luxons) {
                    yield domain.fromLuxon(luxon)
                }
            }
        } 
    }
    cmp(a: _Zone, b:_Zone): undefined|-1|0|1 {
        let code = cmp(a.minutes, b.minutes);
        if(code !== 0) return code;
        code = cmp(a.name, b.name);
        return code;
    }

    getLocal() {
        return this.fromLuxon(Luxon.DateTime.local());
    }
    getByName(name: string): _Zone {
        const luxon = Luxon.DateTime.local({ zone: name });
        return {
            name: luxon.zoneName,
            minutes: luxon.offset,
            short: luxon.offsetNameShort,
            long: luxon.offsetNameLong
        }
    }
    fromLuxon(luxon: Luxon.DateTime): _Zone {
        return {
            name: luxon.zoneName,
            minutes: luxon.offset,
            short: luxon.offsetNameShort,
            long: luxon.offsetNameLong
        }
    }
}
export const Domain = new _Domain(makePath('Domain'));
directory.add(Domain);
export default _Zone;
