// models/src/Event.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Values } from '@pitaman71/omniglot-live-data';
import { Domain as WhenDomain } from './When';
import { Domain as WhereDomain } from './Where';
import { Domain as VicinityDomain } from './Vicinity';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.Event.${path}`;

class _Domain extends Values.AggregateDomain<{
    where: Introspection.getValueType<typeof WhereDomain>,
    vicinity: Introspection.getValueType<typeof VicinityDomain>,
    when: Introspection.getValueType<typeof WhenDomain>
}> {
    constructor(canonicalName: string) {
        super(canonicalName, {
            where: WhereDomain,
            vicinity: VicinityDomain,
            when: WhenDomain
        })
    }
}

/**
 * Something that has happened, is happening, or will happen
 * at a known time and place.
 */
export const Domain = new _Domain(makePath('Domain'));

directory.add(Domain);
type ValueType = Introspection.getValueType<typeof Domain>;
export default ValueType;
