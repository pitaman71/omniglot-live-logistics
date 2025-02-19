// models/src/When.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import _Date, { Domain as DateDomain } from './Date';
import _DateRange, { Domain as DateRangeDomain } from './DateRange';
import _TimeRange, { Domain as TimeRangeDomain } from './TimeRange';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.TimeRange.${path}`;

/**
 * A flexible representation of when an event may happen, is happening, or has happened.
 */
export interface _When {
    at?: _Date,
    dates?: _DateRange,
    times?: _TimeRange
}

class _Domain extends Values.AggregateDomain<_When> {
    constructor(path: string) {
        super(path, {
            at: DateDomain,
            dates: DateRangeDomain,
            times: TimeRangeDomain,
        }, ['at', 'dates', 'times'])
    }
    expand(a: _When, b: Partial<_When>) {
        if(!a.dates?.from || !a.dates?.to) return b;
        if(!b.dates?.from || !b.dates?.to) return a;
        let from = DateDomain.cmp(b.dates.from, a.dates.from);
        let to = DateDomain.cmp(b.dates.to, a.dates.to);
        // incomparable
        if(from === undefined || to === undefined) return undefined;

        // a subsumes b
        if(from >= 0 && to <= 0) return a;

        // b subsumes a
        if(from <= 0 && to >= 0) return b;
        
        // union
        return this.asJSON().from({
            from : from >= 0 ? DateDomain.asJSON().to(a.dates.from) : DateDomain.asJSON().to(b.dates.from),
            to : to <= 0 ? DateDomain.asJSON().to(a.dates.to) : DateDomain.asJSON().to(b.dates.to)
        })
    }
};
export const Domain = new _Domain(makePath('Domain'));
directory.add(Domain);
export default _When;
