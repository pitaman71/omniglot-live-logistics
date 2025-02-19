// models/src/Meridian.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.Meridian.${path}`;

/**
 * AM/PM indicator, if needed
 */
export const Domain = new Values.EnumerationDomain(makePath('Domain'), 'am', 'pm');
directory.add(Domain);
type ValueType = Introspection.getValueType<typeof Domain>;
export default ValueType;
