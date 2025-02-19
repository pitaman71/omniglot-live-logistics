// models/src/DateRange.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { Domain as DateDomain } from './Date';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.DateRange.${path}`;

export const Domain = new Values.AggregateDomain(makePath('Domain'),{
    from: DateDomain,
    to: DateDomain
});

directory.add(Domain);
type ValueType = Introspection.getValueType<typeof Domain>;
export default ValueType;
