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

/**
 * Physical address of a place in pseudo-international format.
 */
export const Domain = new Values.AggregateDomain(makePath('Domain'), { 
    addressLine1: Values.TheStringDomain,
    addressLine2: Values.TheStringDomain,
    postalCode: Values.TheStringDomain
}, ['addressLine1', 'addressLine2', 'postalCode']);

directory.add(Domain);
export type Value = Introspection.getValueType<typeof Domain>;
export default Value;
