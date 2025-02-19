// models/src/Place.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.Place.${path}`;

/**
 * Name of a place
 */
export const Domain = new Values.AggregateDomain(makePath('Domain'), {
    shortName: Values.TheStringDomain,
    longName: Values.TheStringDomain,
    iso: new Values.AggregateDomain(makePath('Domain.iso'), { 
        standard: Values.TheStringDomain, 
        code: Values.TheStringDomain
    })
}, [ 'shortName', 'longName', 'iso']);

directory.add(Domain);
type ValueType = Introspection.getValueType<typeof Domain>;
export default ValueType;
