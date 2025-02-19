// models/src/GeoShape.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { Domain as GeoPointDomain } from './GeoPoint';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.GeoShape.${path}`;

/**
 * Shape on the surface of the globe as a single point or cloud of points.
 */
export const Domain = new Values.AggregateDomain(makePath('Domain'), { 
    point: GeoPointDomain,
    cloud: new Values.ArrayDomain(makePath('Domain.cloud'), GeoPointDomain)
});
directory.add(Domain);
type ValueType = Introspection.getValueType<typeof Domain>;
export default ValueType;
