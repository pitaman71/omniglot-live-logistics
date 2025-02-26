import * as Introspection from 'typescript-introspection';
import { Values } from '@pitaman71/omniglot-live-data';

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

/**
 * Physical address of a place in pseudo-international format.
 */
declare const Domain$3: Values.AggregateDomain<{
    addressLine1: string;
    addressLine2: string;
    postalCode: string;
}>;
type Value$8 = Introspection.getValueType<typeof Domain$3>;

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

interface Value$7 {
    year?: number;
    month?: number;
    day?: number;
}

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

/**
 * AM/PM indicator, if needed
 */
declare const Domain$2: Values.EnumerationDomain<"am" | "pm">;
type Value$6 = Introspection.getValueType<typeof Domain$2>;

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

interface Value$5 {
    name?: string;
    short?: string;
    long?: string;
    minutes?: number;
}

interface Value$4 {
    hour?: number;
    minute?: number;
    second?: number;
    meridian?: Value$6;
    zone?: Value$5;
}

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

interface Value$3 {
    date?: Value$7;
    time?: Value$4;
}

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

declare const Domain$1: Values.AggregateDomain<{
    city: Partial<{
        shortName: /*elided*/ any;
        longName: /*elided*/ any;
        iso: /*elided*/ any;
    }>;
    county: Partial<{
        shortName: /*elided*/ any;
        longName: /*elided*/ any;
        iso: /*elided*/ any;
    }>;
    state: Partial<{
        shortName: /*elided*/ any;
        longName: /*elided*/ any;
        iso: /*elided*/ any;
    }>;
    country: Partial<{
        shortName: /*elided*/ any;
        longName: /*elided*/ any;
        iso: /*elided*/ any;
    }>;
}>;
type Value$2 = Introspection.getValueType<typeof Domain$1>;

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

/**
 * Shape on the surface of the globe as a single point or cloud of points.
 */
declare const Domain: Values.AggregateDomain<{
    point: Partial<{
        lat: /*elided*/ any;
        lng: /*elided*/ any;
    }>;
    cloud: Partial<{
        lat: /*elided*/ any;
        lng: /*elided*/ any;
    }>[];
}>;

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

interface Value$1 {
    name?: string;
    googlePlaceId?: string;
    address?: Introspection.getValueType<typeof Domain$3>;
    municipality?: Introspection.getValueType<typeof Domain$1>;
    geo?: Introspection.getValueType<typeof Domain>;
}

type Value<T> = T & {
    text?: string;
    errors?: string[];
};

/**
 * Base type for a react component that renders a one-line summary of the data as
 * meaningfully as possible, possibly making use of emoji characters and single-line
 * decorated DIVs.
 */
type Summary$4<T> = (props: React.PropsWithChildren<{
    value?: Value<T>;
    client?: {
        assign: (value_: Value<T>) => void;
        clear: () => void;
    };
}>) => JSX.Element;
/**
  * Base type for a react component that renders a the full detail of
  * data as a flow of HTML document elements. Default styling should be
  * clean.
  * */
type Document$4<T> = (props: {
    value?: Value<T>;
    client?: {
        assign: (value_: Value<T>) => void;
        clear: () => void;
    };
}) => JSX.Element;

declare const Summary$3: Summary$4<Value$8>;
declare const Document$3: Document$4<Value$8>;

declare namespace Address {
  export { Document$3 as Document, Summary$3 as Summary };
}

declare const Summary$2: Summary$4<Value$3>;
declare const Document$2: Document$4<Value$3>;

declare namespace DateTime {
  export { Document$2 as Document, Summary$2 as Summary };
}

declare const Summary$1: Summary$4<Value$2>;
declare const Document$1: Document$4<Value$2>;

declare namespace Municipality {
  export { Document$1 as Document, Summary$1 as Summary };
}

declare const Summary: Summary$4<Value$1>;
declare const Document: Document$4<Value$1>;

declare const Where_Document: typeof Document;
declare const Where_Summary: typeof Summary;
declare namespace Where {
  export { Where_Document as Document, Where_Summary as Summary };
}

export { Address, DateTime, Municipality, Where };
