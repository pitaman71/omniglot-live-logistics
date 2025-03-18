// models/src/GeoShape.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { Domain as GeoPointDomain } from './GeoPoint';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.GeoShape.${path}`;

/**
 * Shape on the surface of the globe as a single point or cloud of points.
 */
export const Domain = new Values.UnionDomain(makePath(`ShapeDomain`), 'type', {
    Point: GeoPointDomain
});
directory.add(Domain);
export type Value = Introspection.getValueType<typeof Domain>;
export default Value;
