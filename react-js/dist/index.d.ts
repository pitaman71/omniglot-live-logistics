import { Values } from '@pitaman71/omniglot-live-data';
import * as Introspection from 'typescript-introspection';

interface Value$8 {
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
}
/**
 * Physical address of a place in pseudo-international format.
 */
declare const Domain$4: Values.AggregateDomain<Value$8, "addressLine1" | "addressLine2" | "postalCode", Values.MakePropDomains<Value$8, "addressLine1" | "addressLine2" | "postalCode">>;

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
declare const Domain$3: Values.EnumerationDomain<"am" | "pm">;
type Value$6 = Introspection.getValueType<typeof Domain$3>;

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

/**
 * Name of a place
 */
declare const Domain$2: Values.AggregateDomain<Record<string, any>, "shortName" | "longName" | "iso", {
    shortName: {
        asProperties(): undefined;
        asSchema(): string;
        asJSON(): {
            from(json: Introspection.JSONValue, options?: {
                onError?: (error: Introspection.Parsing.Error) => void;
            }): string | null;
            to(value: string | null): string | null;
        };
        asString(): {
            from(text: string | null): string | null;
            to(value: string | null): string | null;
        };
        asFeature(maxFeatureSize: number): {
            characterize(value: string, options: {
                featureMass?: Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                unclassified?: Map<string, number>;
            }): void;
            to(value: string): Map<string, Introspection.Mass<{
                key: string;
            }>>;
            from(featureMass: Map<string, Introspection.Mass<{
                key: string;
            }>>, numSamples: number): Generator<Introspection.Mass<{
                value: string;
            }>>;
        };
        cmp(a: string, b: string): 0 | 1 | -1;
        canonicalName: string;
        asComment(): undefined | string[];
        asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
            dimension: Introspection.Measurements.Dimension;
        }) | undefined;
        asISO(): {
            date(): Introspection.Transcoder<string, string> | undefined;
            time(): Introspection.Transcoder<string, string> | undefined;
            dateTime(): Introspection.Transcoder<string, string> | undefined;
            duration(): Introspection.Transcoder<string, string> | undefined;
            interval(): Introspection.Transcoder<string, string> | undefined;
            recurrence(): Introspection.Transcoder<string, string> | undefined;
        } | undefined;
        asArray(): undefined | {
            indexDomains: () => undefined | Array<Introspection.Domain<any>>;
            elementDomain: () => undefined | Introspection.Domain<any>;
        };
        asVariants(): undefined | {
            discKey: string;
            domain: Record<string, Introspection.Domain<any>>;
        };
        asEnumeration(maxCount: number): {
            forward(): Generator<string, any, any>;
            backward(): Generator<string, any, any>;
        } | undefined;
    };
    longName: {
        asProperties(): undefined;
        asSchema(): string;
        asJSON(): {
            from(json: Introspection.JSONValue, options?: {
                onError?: (error: Introspection.Parsing.Error) => void;
            }): string | null;
            to(value: string | null): string | null;
        };
        asString(): {
            from(text: string | null): string | null;
            to(value: string | null): string | null;
        };
        asFeature(maxFeatureSize: number): {
            characterize(value: string, options: {
                featureMass?: Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                unclassified?: Map<string, number>;
            }): void;
            to(value: string): Map<string, Introspection.Mass<{
                key: string;
            }>>;
            from(featureMass: Map<string, Introspection.Mass<{
                key: string;
            }>>, numSamples: number): Generator<Introspection.Mass<{
                value: string;
            }>>;
        };
        cmp(a: string, b: string): 0 | 1 | -1;
        canonicalName: string;
        asComment(): undefined | string[];
        asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
            dimension: Introspection.Measurements.Dimension;
        }) | undefined;
        asISO(): {
            date(): Introspection.Transcoder<string, string> | undefined;
            time(): Introspection.Transcoder<string, string> | undefined;
            dateTime(): Introspection.Transcoder<string, string> | undefined;
            duration(): Introspection.Transcoder<string, string> | undefined;
            interval(): Introspection.Transcoder<string, string> | undefined;
            recurrence(): Introspection.Transcoder<string, string> | undefined;
        } | undefined;
        asArray(): undefined | {
            indexDomains: () => undefined | Array<Introspection.Domain<any>>;
            elementDomain: () => undefined | Introspection.Domain<any>;
        };
        asVariants(): undefined | {
            discKey: string;
            domain: Record<string, Introspection.Domain<any>>;
        };
        asEnumeration(maxCount: number): {
            forward(): Generator<string, any, any>;
            backward(): Generator<string, any, any>;
        } | undefined;
    };
    iso: Values.AggregateDomain<Record<string, any>, string, {
        standard: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
        code: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
    }>;
}>;
type Value$2 = Introspection.getValueType<typeof Domain$2>;

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

interface Value$1 {
    city?: Value$2;
    county?: Value$2;
    state?: Value$2;
    country?: Value$2;
}
declare const Domain$1: Values.AggregateDomain<Record<string, any>, "city" | "county" | "state" | "country", {
    city: Values.AggregateDomain<Record<string, any>, "shortName" | "longName" | "iso", {
        shortName: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
        longName: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
        iso: Values.AggregateDomain<Record<string, any>, string, {
            standard: {
                asProperties(): undefined;
                asSchema(): string;
                asJSON(): {
                    from(json: Introspection.JSONValue, options?: {
                        onError?: (error: Introspection.Parsing.Error) => void;
                    }): string | null;
                    to(value: string | null): string | null;
                };
                asString(): {
                    from(text: string | null): string | null;
                    to(value: string | null): string | null;
                };
                asFeature(maxFeatureSize: number): {
                    characterize(value: string, options: {
                        featureMass?: Map<string, Introspection.Mass<{
                            key: string;
                        }>>;
                        unclassified?: Map<string, number>;
                    }): void;
                    to(value: string): Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    from(featureMass: Map<string, Introspection.Mass<{
                        key: string;
                    }>>, numSamples: number): Generator<Introspection.Mass<{
                        value: string;
                    }>>;
                };
                cmp(a: string, b: string): 0 | 1 | -1;
                canonicalName: string;
                asComment(): undefined | string[];
                asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                    dimension: Introspection.Measurements.Dimension;
                }) | undefined;
                asISO(): {
                    date(): Introspection.Transcoder<string, string> | undefined;
                    time(): Introspection.Transcoder<string, string> | undefined;
                    dateTime(): Introspection.Transcoder<string, string> | undefined;
                    duration(): Introspection.Transcoder<string, string> | undefined;
                    interval(): Introspection.Transcoder<string, string> | undefined;
                    recurrence(): Introspection.Transcoder<string, string> | undefined;
                } | undefined;
                asArray(): undefined | {
                    indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                    elementDomain: () => undefined | Introspection.Domain<any>;
                };
                asVariants(): undefined | {
                    discKey: string;
                    domain: Record<string, Introspection.Domain<any>>;
                };
                asEnumeration(maxCount: number): {
                    forward(): Generator<string, any, any>;
                    backward(): Generator<string, any, any>;
                } | undefined;
            };
            code: {
                asProperties(): undefined;
                asSchema(): string;
                asJSON(): {
                    from(json: Introspection.JSONValue, options?: {
                        onError?: (error: Introspection.Parsing.Error) => void;
                    }): string | null;
                    to(value: string | null): string | null;
                };
                asString(): {
                    from(text: string | null): string | null;
                    to(value: string | null): string | null;
                };
                asFeature(maxFeatureSize: number): {
                    characterize(value: string, options: {
                        featureMass?: Map<string, Introspection.Mass<{
                            key: string;
                        }>>;
                        unclassified?: Map<string, number>;
                    }): void;
                    to(value: string): Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    from(featureMass: Map<string, Introspection.Mass<{
                        key: string;
                    }>>, numSamples: number): Generator<Introspection.Mass<{
                        value: string;
                    }>>;
                };
                cmp(a: string, b: string): 0 | 1 | -1;
                canonicalName: string;
                asComment(): undefined | string[];
                asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                    dimension: Introspection.Measurements.Dimension;
                }) | undefined;
                asISO(): {
                    date(): Introspection.Transcoder<string, string> | undefined;
                    time(): Introspection.Transcoder<string, string> | undefined;
                    dateTime(): Introspection.Transcoder<string, string> | undefined;
                    duration(): Introspection.Transcoder<string, string> | undefined;
                    interval(): Introspection.Transcoder<string, string> | undefined;
                    recurrence(): Introspection.Transcoder<string, string> | undefined;
                } | undefined;
                asArray(): undefined | {
                    indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                    elementDomain: () => undefined | Introspection.Domain<any>;
                };
                asVariants(): undefined | {
                    discKey: string;
                    domain: Record<string, Introspection.Domain<any>>;
                };
                asEnumeration(maxCount: number): {
                    forward(): Generator<string, any, any>;
                    backward(): Generator<string, any, any>;
                } | undefined;
            };
        }>;
    }>;
    county: Values.AggregateDomain<Record<string, any>, "shortName" | "longName" | "iso", {
        shortName: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
        longName: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
        iso: Values.AggregateDomain<Record<string, any>, string, {
            standard: {
                asProperties(): undefined;
                asSchema(): string;
                asJSON(): {
                    from(json: Introspection.JSONValue, options?: {
                        onError?: (error: Introspection.Parsing.Error) => void;
                    }): string | null;
                    to(value: string | null): string | null;
                };
                asString(): {
                    from(text: string | null): string | null;
                    to(value: string | null): string | null;
                };
                asFeature(maxFeatureSize: number): {
                    characterize(value: string, options: {
                        featureMass?: Map<string, Introspection.Mass<{
                            key: string;
                        }>>;
                        unclassified?: Map<string, number>;
                    }): void;
                    to(value: string): Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    from(featureMass: Map<string, Introspection.Mass<{
                        key: string;
                    }>>, numSamples: number): Generator<Introspection.Mass<{
                        value: string;
                    }>>;
                };
                cmp(a: string, b: string): 0 | 1 | -1;
                canonicalName: string;
                asComment(): undefined | string[];
                asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                    dimension: Introspection.Measurements.Dimension;
                }) | undefined;
                asISO(): {
                    date(): Introspection.Transcoder<string, string> | undefined;
                    time(): Introspection.Transcoder<string, string> | undefined;
                    dateTime(): Introspection.Transcoder<string, string> | undefined;
                    duration(): Introspection.Transcoder<string, string> | undefined;
                    interval(): Introspection.Transcoder<string, string> | undefined;
                    recurrence(): Introspection.Transcoder<string, string> | undefined;
                } | undefined;
                asArray(): undefined | {
                    indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                    elementDomain: () => undefined | Introspection.Domain<any>;
                };
                asVariants(): undefined | {
                    discKey: string;
                    domain: Record<string, Introspection.Domain<any>>;
                };
                asEnumeration(maxCount: number): {
                    forward(): Generator<string, any, any>;
                    backward(): Generator<string, any, any>;
                } | undefined;
            };
            code: {
                asProperties(): undefined;
                asSchema(): string;
                asJSON(): {
                    from(json: Introspection.JSONValue, options?: {
                        onError?: (error: Introspection.Parsing.Error) => void;
                    }): string | null;
                    to(value: string | null): string | null;
                };
                asString(): {
                    from(text: string | null): string | null;
                    to(value: string | null): string | null;
                };
                asFeature(maxFeatureSize: number): {
                    characterize(value: string, options: {
                        featureMass?: Map<string, Introspection.Mass<{
                            key: string;
                        }>>;
                        unclassified?: Map<string, number>;
                    }): void;
                    to(value: string): Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    from(featureMass: Map<string, Introspection.Mass<{
                        key: string;
                    }>>, numSamples: number): Generator<Introspection.Mass<{
                        value: string;
                    }>>;
                };
                cmp(a: string, b: string): 0 | 1 | -1;
                canonicalName: string;
                asComment(): undefined | string[];
                asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                    dimension: Introspection.Measurements.Dimension;
                }) | undefined;
                asISO(): {
                    date(): Introspection.Transcoder<string, string> | undefined;
                    time(): Introspection.Transcoder<string, string> | undefined;
                    dateTime(): Introspection.Transcoder<string, string> | undefined;
                    duration(): Introspection.Transcoder<string, string> | undefined;
                    interval(): Introspection.Transcoder<string, string> | undefined;
                    recurrence(): Introspection.Transcoder<string, string> | undefined;
                } | undefined;
                asArray(): undefined | {
                    indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                    elementDomain: () => undefined | Introspection.Domain<any>;
                };
                asVariants(): undefined | {
                    discKey: string;
                    domain: Record<string, Introspection.Domain<any>>;
                };
                asEnumeration(maxCount: number): {
                    forward(): Generator<string, any, any>;
                    backward(): Generator<string, any, any>;
                } | undefined;
            };
        }>;
    }>;
    state: Values.AggregateDomain<Record<string, any>, "shortName" | "longName" | "iso", {
        shortName: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
        longName: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
        iso: Values.AggregateDomain<Record<string, any>, string, {
            standard: {
                asProperties(): undefined;
                asSchema(): string;
                asJSON(): {
                    from(json: Introspection.JSONValue, options?: {
                        onError?: (error: Introspection.Parsing.Error) => void;
                    }): string | null;
                    to(value: string | null): string | null;
                };
                asString(): {
                    from(text: string | null): string | null;
                    to(value: string | null): string | null;
                };
                asFeature(maxFeatureSize: number): {
                    characterize(value: string, options: {
                        featureMass?: Map<string, Introspection.Mass<{
                            key: string;
                        }>>;
                        unclassified?: Map<string, number>;
                    }): void;
                    to(value: string): Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    from(featureMass: Map<string, Introspection.Mass<{
                        key: string;
                    }>>, numSamples: number): Generator<Introspection.Mass<{
                        value: string;
                    }>>;
                };
                cmp(a: string, b: string): 0 | 1 | -1;
                canonicalName: string;
                asComment(): undefined | string[];
                asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                    dimension: Introspection.Measurements.Dimension;
                }) | undefined;
                asISO(): {
                    date(): Introspection.Transcoder<string, string> | undefined;
                    time(): Introspection.Transcoder<string, string> | undefined;
                    dateTime(): Introspection.Transcoder<string, string> | undefined;
                    duration(): Introspection.Transcoder<string, string> | undefined;
                    interval(): Introspection.Transcoder<string, string> | undefined;
                    recurrence(): Introspection.Transcoder<string, string> | undefined;
                } | undefined;
                asArray(): undefined | {
                    indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                    elementDomain: () => undefined | Introspection.Domain<any>;
                };
                asVariants(): undefined | {
                    discKey: string;
                    domain: Record<string, Introspection.Domain<any>>;
                };
                asEnumeration(maxCount: number): {
                    forward(): Generator<string, any, any>;
                    backward(): Generator<string, any, any>;
                } | undefined;
            };
            code: {
                asProperties(): undefined;
                asSchema(): string;
                asJSON(): {
                    from(json: Introspection.JSONValue, options?: {
                        onError?: (error: Introspection.Parsing.Error) => void;
                    }): string | null;
                    to(value: string | null): string | null;
                };
                asString(): {
                    from(text: string | null): string | null;
                    to(value: string | null): string | null;
                };
                asFeature(maxFeatureSize: number): {
                    characterize(value: string, options: {
                        featureMass?: Map<string, Introspection.Mass<{
                            key: string;
                        }>>;
                        unclassified?: Map<string, number>;
                    }): void;
                    to(value: string): Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    from(featureMass: Map<string, Introspection.Mass<{
                        key: string;
                    }>>, numSamples: number): Generator<Introspection.Mass<{
                        value: string;
                    }>>;
                };
                cmp(a: string, b: string): 0 | 1 | -1;
                canonicalName: string;
                asComment(): undefined | string[];
                asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                    dimension: Introspection.Measurements.Dimension;
                }) | undefined;
                asISO(): {
                    date(): Introspection.Transcoder<string, string> | undefined;
                    time(): Introspection.Transcoder<string, string> | undefined;
                    dateTime(): Introspection.Transcoder<string, string> | undefined;
                    duration(): Introspection.Transcoder<string, string> | undefined;
                    interval(): Introspection.Transcoder<string, string> | undefined;
                    recurrence(): Introspection.Transcoder<string, string> | undefined;
                } | undefined;
                asArray(): undefined | {
                    indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                    elementDomain: () => undefined | Introspection.Domain<any>;
                };
                asVariants(): undefined | {
                    discKey: string;
                    domain: Record<string, Introspection.Domain<any>>;
                };
                asEnumeration(maxCount: number): {
                    forward(): Generator<string, any, any>;
                    backward(): Generator<string, any, any>;
                } | undefined;
            };
        }>;
    }>;
    country: Values.AggregateDomain<Record<string, any>, "shortName" | "longName" | "iso", {
        shortName: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
        longName: {
            asProperties(): undefined;
            asSchema(): string;
            asJSON(): {
                from(json: Introspection.JSONValue, options?: {
                    onError?: (error: Introspection.Parsing.Error) => void;
                }): string | null;
                to(value: string | null): string | null;
            };
            asString(): {
                from(text: string | null): string | null;
                to(value: string | null): string | null;
            };
            asFeature(maxFeatureSize: number): {
                characterize(value: string, options: {
                    featureMass?: Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    unclassified?: Map<string, number>;
                }): void;
                to(value: string): Map<string, Introspection.Mass<{
                    key: string;
                }>>;
                from(featureMass: Map<string, Introspection.Mass<{
                    key: string;
                }>>, numSamples: number): Generator<Introspection.Mass<{
                    value: string;
                }>>;
            };
            cmp(a: string, b: string): 0 | 1 | -1;
            canonicalName: string;
            asComment(): undefined | string[];
            asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                dimension: Introspection.Measurements.Dimension;
            }) | undefined;
            asISO(): {
                date(): Introspection.Transcoder<string, string> | undefined;
                time(): Introspection.Transcoder<string, string> | undefined;
                dateTime(): Introspection.Transcoder<string, string> | undefined;
                duration(): Introspection.Transcoder<string, string> | undefined;
                interval(): Introspection.Transcoder<string, string> | undefined;
                recurrence(): Introspection.Transcoder<string, string> | undefined;
            } | undefined;
            asArray(): undefined | {
                indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                elementDomain: () => undefined | Introspection.Domain<any>;
            };
            asVariants(): undefined | {
                discKey: string;
                domain: Record<string, Introspection.Domain<any>>;
            };
            asEnumeration(maxCount: number): {
                forward(): Generator<string, any, any>;
                backward(): Generator<string, any, any>;
            } | undefined;
        };
        iso: Values.AggregateDomain<Record<string, any>, string, {
            standard: {
                asProperties(): undefined;
                asSchema(): string;
                asJSON(): {
                    from(json: Introspection.JSONValue, options?: {
                        onError?: (error: Introspection.Parsing.Error) => void;
                    }): string | null;
                    to(value: string | null): string | null;
                };
                asString(): {
                    from(text: string | null): string | null;
                    to(value: string | null): string | null;
                };
                asFeature(maxFeatureSize: number): {
                    characterize(value: string, options: {
                        featureMass?: Map<string, Introspection.Mass<{
                            key: string;
                        }>>;
                        unclassified?: Map<string, number>;
                    }): void;
                    to(value: string): Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    from(featureMass: Map<string, Introspection.Mass<{
                        key: string;
                    }>>, numSamples: number): Generator<Introspection.Mass<{
                        value: string;
                    }>>;
                };
                cmp(a: string, b: string): 0 | 1 | -1;
                canonicalName: string;
                asComment(): undefined | string[];
                asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                    dimension: Introspection.Measurements.Dimension;
                }) | undefined;
                asISO(): {
                    date(): Introspection.Transcoder<string, string> | undefined;
                    time(): Introspection.Transcoder<string, string> | undefined;
                    dateTime(): Introspection.Transcoder<string, string> | undefined;
                    duration(): Introspection.Transcoder<string, string> | undefined;
                    interval(): Introspection.Transcoder<string, string> | undefined;
                    recurrence(): Introspection.Transcoder<string, string> | undefined;
                } | undefined;
                asArray(): undefined | {
                    indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                    elementDomain: () => undefined | Introspection.Domain<any>;
                };
                asVariants(): undefined | {
                    discKey: string;
                    domain: Record<string, Introspection.Domain<any>>;
                };
                asEnumeration(maxCount: number): {
                    forward(): Generator<string, any, any>;
                    backward(): Generator<string, any, any>;
                } | undefined;
            };
            code: {
                asProperties(): undefined;
                asSchema(): string;
                asJSON(): {
                    from(json: Introspection.JSONValue, options?: {
                        onError?: (error: Introspection.Parsing.Error) => void;
                    }): string | null;
                    to(value: string | null): string | null;
                };
                asString(): {
                    from(text: string | null): string | null;
                    to(value: string | null): string | null;
                };
                asFeature(maxFeatureSize: number): {
                    characterize(value: string, options: {
                        featureMass?: Map<string, Introspection.Mass<{
                            key: string;
                        }>>;
                        unclassified?: Map<string, number>;
                    }): void;
                    to(value: string): Map<string, Introspection.Mass<{
                        key: string;
                    }>>;
                    from(featureMass: Map<string, Introspection.Mass<{
                        key: string;
                    }>>, numSamples: number): Generator<Introspection.Mass<{
                        value: string;
                    }>>;
                };
                cmp(a: string, b: string): 0 | 1 | -1;
                canonicalName: string;
                asComment(): undefined | string[];
                asNumber(dimension?: Introspection.Measurements.Dimension): (Introspection.Transcoder<number, string> & {
                    dimension: Introspection.Measurements.Dimension;
                }) | undefined;
                asISO(): {
                    date(): Introspection.Transcoder<string, string> | undefined;
                    time(): Introspection.Transcoder<string, string> | undefined;
                    dateTime(): Introspection.Transcoder<string, string> | undefined;
                    duration(): Introspection.Transcoder<string, string> | undefined;
                    interval(): Introspection.Transcoder<string, string> | undefined;
                    recurrence(): Introspection.Transcoder<string, string> | undefined;
                } | undefined;
                asArray(): undefined | {
                    indexDomains: () => undefined | Array<Introspection.Domain<any>>;
                    elementDomain: () => undefined | Introspection.Domain<any>;
                };
                asVariants(): undefined | {
                    discKey: string;
                    domain: Record<string, Introspection.Domain<any>>;
                };
                asEnumeration(maxCount: number): {
                    forward(): Generator<string, any, any>;
                    backward(): Generator<string, any, any>;
                } | undefined;
            };
        }>;
    }>;
}>;

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

/**
 * Shape on the surface of the globe as a single point or cloud of points.
 */
declare const Domain: Values.UnionDomain<"type", "Point", Record<string, any>, {
    type: "Point";
} & Record<string, any>>;

/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen.
 */

interface Value {
    name: string;
    googlePlaceId?: string;
    address?: Introspection.getValueType<typeof Domain$4>;
    municipality?: Introspection.getValueType<typeof Domain$1>;
    geo?: Introspection.getValueType<typeof Domain>;
}

interface ScalarProps<T> {
    domain?: Introspection.Domain<T>;
    value?: T;
    client?: {
        assign: (value_: T) => void;
        clear: () => void;
    };
}
/**
 * Base type for a react component that renders a one-line summary of the data as
 * meaningfully as possible, possibly making use of emoji characters and single-line
 * decorated DIVs.
 */
type Summary$4<T> = (props: React.PropsWithChildren<ScalarProps<T>>) => JSX.Element;
/**
  * Base type for a react component that renders a the full detail of
  * data as a flow of HTML document elements. Default styling should be
  * clean.
  * */
type Document$4<T> = (props: ScalarProps<T>) => JSX.Element;

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

declare const Summary$1: Summary$4<Value$1>;
declare const Document$1: Document$4<Value$1>;

declare namespace Municipality {
  export { Document$1 as Document, Summary$1 as Summary };
}

declare const Summary: Summary$4<Value>;
declare const Document: Document$4<Value>;

declare const Where_Document: typeof Document;
declare const Where_Summary: typeof Summary;
declare namespace Where {
  export { Where_Document as Document, Where_Summary as Summary };
}

export { Address, DateTime, Municipality, Where };
