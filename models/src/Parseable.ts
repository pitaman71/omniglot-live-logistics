import * as Introspection from 'typescript-introspection';
import cmp from './cmp';

export interface Error {
    type?: {
        expected: 'boolean' | 'number' | 'string' | 'null' | 'object' | 'array';
    };
    format?: {
        expected?: {
            tokenType: string;
        };
        atCharacter?: number;
    };
    properties?: {
        [propName: string]: {
            status: 'good' | 'missing' | 'extra' | 'malformed';
            details?: Error;
        };
    };
}

export type Value<T>  = T & {
    text?: string,
    errors?: string[]
}

export class Domain<T> extends Introspection.Domain<Value<T>> {
    domain: Introspection.Domain<T>;
    constructor(
        domain: Introspection.Domain<T>
    ) {
        super(`Parseable<${domain.canonicalName}>`);
        this.domain = domain;
    }
    asString() { 
        const tAsString = this.domain.asString();
        if(!tAsString) return undefined;
        return {
            to(val: Value<T>) {
                if(val.text !== undefined) return val.text;
                return tAsString.to(val);
            }, from(text: string): Value<T>|null {
                const errors: Error[] = [];
                const parsed = tAsString.from(text, { onError: err => errors.push(err) });
                return {
                    text,
                    errors: errors.length === 0 ? undefined : errors,
                    ...parsed
                } as Value<T>
            }
        }
    }
    cmp(a:Value<T>, b:Value<T>) {
        const tCmp = this.domain.cmp;
        if(!tCmp) return undefined;
        const code = tCmp(a,b);
        if(code !== 0) return code;
        return cmp(a.text, b.text);
    }
}
export default Value;
