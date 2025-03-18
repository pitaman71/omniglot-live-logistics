// models/src/Address.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.Address.${path}`;

export interface Value {
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
}
/**
 * Physical address of a place in pseudo-international format.
 */
export const Domain = new Values.AggregateDomain<Value>(makePath('Domain'), { 
    addressLine1: Values.TheStringDomain,
    addressLine2: Values.TheStringDomain,
    postalCode: Values.TheStringDomain
}, ['addressLine1', 'addressLine2', 'postalCode']);

directory.add(Domain);
export default Value;
