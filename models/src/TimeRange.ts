// models/src/TimeRange.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { Domain as DateDomain } from './Date';
import { Domain as TimeDomain } from './Time';
export const directory = new Definitions.Directory();

const makePath = (path: string) => `omniglot-live-logistics.TimeRange.${path}`;

export const Domain = new Values.AggregateDomain(makePath('Domain'),{
    from: TimeDomain,
    to: TimeDomain
});

directory.add(Domain);
export type Value = Introspection.getValueType<typeof Domain>;
export default Value;
