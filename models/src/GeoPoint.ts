// models/src/GeoPoint.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.GeoPoint.${path}`;

/**
 * Cartesian global coordinates in latitude, longitude format
 */
export const Domain = new Values.AggregateDomain(makePath('Domain'), { 
    lat: Values.TheNumberDomain, 
    lng: Values.TheNumberDomain
});

directory.add(Domain);
export type Value = Introspection.getValueType<typeof Domain>;
export default Value;
