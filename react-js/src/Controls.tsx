import { Date, Parseable } from 'omniglot-live-logistics-models';

/**
 * Base type for a react component that renders a one-line summary of the data as 
 * meaningfully as possible, possibly making use of emoji characters and single-line 
 * decorated DIVs.
 */
export type Summary<T> = (props: React.PropsWithChildren<{
    value?: Parseable.Value<T>,
    client?: {
        assign: (value_: Parseable.Value<T>) => void,
        clear: () => void
    }
}>) => JSX.Element;

/**
  * Base type for a react component that renders a one-line graph of the data, 
  * such as a timeline or linear minimap, in vertical or horizontal orientation.
  * */
export type Linear<T> = (props: {
    orientation: 'vertical'|'horizontal',
    value?: Parseable.Value<T>,
    client?: {
        assign: (value_: Parseable.Value<T>) => void,
        clear: () => void
    }
}) => JSX.Element;

/**
  * Base type for a react component that renders a small rectangular summary
  * of the data, typically 150-250 px in height and width. Examples: a single 
  * background avatar or cover photo overlaid with 1-3 lines of property summary, 
  * or a minimap.
  * */
export type Tile<T> = (props: {
    value?: Parseable.Value<T>,
    client?: {
        assign: (value_: Parseable.Value<T>) => void,
        clear: () => void
    }
}) => JSX.Element;

/**
  * Base type for a react component that renders a medium rectangular summary
  * of the data, typically 480-900 px in height and width. Suitable for 
  * mobile full-screen or tablet/laptop partial-screen.
  * */
export type Card<T> = (props: {
    value?: Parseable.Value<T>,
    client?: {
        assign: (value_: Parseable.Value<T>) => void,
        clear: () => void
    }
}) => JSX.Element;

/**
  * Base type for a react component that renders a large rectangular summary
  * of the data, typically 900px or larger in height and width. Suitable for 
  * tablet/laptop full-screen or half-screen.
  * */
export type Window<T> = (props: {
    value?: Parseable.Value<T>,
    client?: {
        assign: (value_: Parseable.Value<T>) => void,
        clear: () => void
    }
}) => JSX.Element;

/**
  * Base type for a react component that renders a the full detail of
  * data as a flow of HTML document elements. Default styling should be
  * clean.
  * */
export type Document<T> = (props: {
    value?: Parseable.Value<T>,
    client?: {
        assign: (value_: Parseable.Value<T>) => void,
        clear: () => void
    }
}) => JSX.Element;
