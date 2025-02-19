// models/src/cmp.ts
export default function cmp<DataType>(a: DataType|undefined, b:DataType|undefined, comparator?: (a: DataType, b: DataType) => -1 | 0 | 1 | undefined): -1 | 0 | 1 | undefined {
    if(a === undefined || b === undefined) {
        if(a === undefined && b !== undefined) return -1;
        if(a !== undefined && b === undefined) return +1;
        return 0;
    }
    if(a === null || b === null) {
        if(a === null && b !== null) return -1;
        if(a !== null && b === null) return +1;
        return 0;
    }

    if(comparator) return comparator(a,b);
    return (a < b) ? -1 : (a > b) ? +1 : 0;
}
