// models/src/Municipality.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { Domain as PlaceDomain, Value as Place } from './Place';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.Municipality.${path}`;

export interface Value {
    city?: Place,
    county?: Place,
    state?: Place,
    country?: Place
}
export const Domain = new Values.AggregateDomain(makePath('Domain'), { 
    city: PlaceDomain,
    county: PlaceDomain,
    state: PlaceDomain,
    country: PlaceDomain
}, ['city', 'county', 'state', 'country']);

directory.add(Domain);
export default Value;
