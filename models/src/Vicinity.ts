// models/src/Vicinity.ts
/**
 * Introspectable domain models representing logistical information;
 * e.g. where and when things happended, are happening, or will
 * happen. 
 */
import * as Introspection from 'typescript-introspection';
import { Definitions, Values } from '@pitaman71/omniglot-live-data';
import { directory } from '.';

const makePath = (path: string) => `omniglot-live-logistics.Vicinity.${path}`;

export interface _Vicinity {
    sense: 'inside'|'outside';
    radius?: { miles: number }|{ kilometers: number };
}

class _Domain extends Introspection.Domain<_Vicinity> {
    asString(format?: string) { 
        return {
            from(text: string): null|_Vicinity { 
                let sense:'inside'|'outside' = 'outside';
                let radius: { miles: number }|{ kilometers: number }|undefined;
                const match = text.match(/([+-]?)(\d+)\s*(\w+)/);
                if(match) {
                    if(match[1] == '-') sense = 'inside';
                    if(match[3] == 'mi' || match[3] == 'miles') radius = { miles: parseInt(match[2]) };
                    if(match[3] == 'km' || match[3] == 'kilometers') radius = { kilometers: parseInt(match[2]) };
                } else {
                    //error = `Expected format: [+-]##[mi|km]`
                    return null;
                }
                return { sense, radius }
            },
            to(value: _Vicinity) { 
                if(value.radius === undefined) return "";
                const { distance, abbrev } = 
                'miles' in value.radius ? { distance: value.radius.miles, abbrev: 'mi' }
                : { distance: value.radius.kilometers, abbrev: 'km' };
                return `${value.sense == 'inside' ? '-' : '+'}${distance}${abbrev}`
            }
        };
    }
    asEnumeration(maxCount: number) { return undefined }
    cmp(a: _Vicinity, b: _Vicinity) {
        return undefined;
    }
}
/**
 * Vicinity around a point on the earth, as measured in surface distance.
 */
export const Domain = new _Domain(makePath('Domain'));

directory.add(Domain);
export default _Vicinity;
