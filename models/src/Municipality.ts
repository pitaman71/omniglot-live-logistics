// models/src/Municipality.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { Domain as PlaceDomain } from './Place';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.Municipality.${path}`;

export const Domain = new Values.AggregateDomain(makePath('Domain'), { 
    city: PlaceDomain,
    county: PlaceDomain,
    state: PlaceDomain,
    country: PlaceDomain
}, ['city', 'county', 'state', 'country']);

directory.add(Domain);
type ValueType = Introspection.getValueType<typeof Domain>;
export default ValueType;
