// models/src/Where.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { Domain as AddressDomain } from './Address';
import { Domain as MunicipalityDomain } from './Municipality';
import { Domain as GeoShapeDomain } from './GeoShape';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.Where.${path}`;

interface _Where {
    name: string,
    googlePlaceId?: string,
    address?: Introspection.getValueType<typeof AddressDomain>,
    municipality?: Introspection.getValueType<typeof MunicipalityDomain>,
    geo?: Introspection.getValueType<typeof GeoShapeDomain>
};

class _Domain extends Values.AggregateDomain<_Where> {
    constructor(canonicalName: string) {
        super(canonicalName, {
            name: Values.TheStringDomain,
            googlePlaceId: Values.TheStringDomain,
            address: AddressDomain,
            municipality: MunicipalityDomain,
            geo: GeoShapeDomain
        }, ['googlePlaceId', 'address', 'geo'])
    }
    asJSON() {
        const superAsJSON = () => super.asJSON();
        return {
            from(json: Introspection.JSONValue, options?: { onError?: (error: Introspection.Error) => void }): Partial<_Where>|null {
                if(typeof json === 'string') {
                    return {
                        name: json
                    }
                }
                return superAsJSON().from(json, options);
            }, to(value: Partial<_Where>): Introspection.JSONValue {
                if(value === null) return null;
                return superAsJSON().to(value);
            }
        }
    }
}

export const Domain = new _Domain(makePath('Domain'));

directory.add(Domain);
export default _Where;
