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

const PositionTranscoder: Introspection.Transcoder<GeoJSON.Position, Value> = {
    from: (x: null|GeoJSON.Position) => (!x ? null : { lat: x[0], lng: x[1] }),
    to: x => (!x ? null : [x.lat, x.lng])
};

const PositionArrayTranscoder: Introspection.Transcoder<GeoJSON.Position[], Value[]> = {
    from: x => (!x ? null : x.reduce<Value[]>(( points, position) => {
        const y: Value|null = PositionTranscoder.from(position);
        if(y === null) return points;
        return [...points, y];
    }, [])),
    to: x => (!x ? null : x.reduce<GeoJSON.Position[]>(( positions, point) => {
        const y: GeoJSON.Position|null = PositionTranscoder.to(point);
        if(y === null) return positions;
        return [...positions, y];
    }, [] ))
};

directory.add(Domain);
export type Value = Introspection.getValueType<typeof Domain>;
export default Value;
