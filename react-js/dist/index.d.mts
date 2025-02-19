import Address$1 from 'omniglot-live-media-models/lib/Address';
import DateTime$1 from 'omniglot-live-media-models/lib/DateTime';
import Municipality$1 from 'omniglot-live-media-models/lib/Municipality';
import Where$1 from 'omniglot-live-media-models/lib/Where';

declare const Summary$2: ({ value, client }: {
    value?: Address$1;
    client?: {
        assign: (value_: Address$1) => void;
        clear: () => void;
    };
}) => JSX.Element;
declare const Detail$3: ({ value, client }: {
    value?: Address$1;
    client?: {
        assign: (value_: Address$1) => void;
        clear: () => void;
    };
}) => JSX.Element;

declare namespace Address {
  export { Detail$3 as Detail, Summary$2 as Summary };
}

declare const Preview: ({ value, client }: {
    value: DateTime$1;
    client?: {
        assign: (value_: DateTime$1) => void;
        clear: () => void;
    };
}) => JSX.Element;
declare const Detail$2: ({ value, client }: {
    value: DateTime$1;
    client?: {
        assign: (value_: DateTime$1) => void;
        clear: () => void;
    };
}) => JSX.Element;

declare const DateTime_Preview: typeof Preview;
declare namespace DateTime {
  export { Detail$2 as Detail, DateTime_Preview as Preview };
}

declare const Summary$1: ({ value, client }: {
    value?: Municipality$1;
    client?: {
        assign: (value_: Municipality$1) => void;
        clear: () => void;
    };
}) => JSX.Element;
declare const Detail$1: ({ value, client }: {
    value?: Municipality$1;
    client?: {
        assign: (value_: Municipality$1) => void;
        clear: () => void;
    };
}) => JSX.Element;

declare namespace Municipality {
  export { Detail$1 as Detail, Summary$1 as Summary };
}

declare const Summary: ({ value, client }: {
    value?: Where$1;
    client?: {
        assign: (value_: Where$1) => void;
        clear: () => void;
    };
}) => JSX.Element;
declare const Detail: ({ value, client }: {
    value?: Where$1;
    client?: {
        assign: (value_: Where$1) => void;
        clear: () => void;
    };
}) => JSX.Element;

declare const Where_Detail: typeof Detail;
declare const Where_Summary: typeof Summary;
declare namespace Where {
  export { Where_Detail as Detail, Where_Summary as Summary };
}

export { Address, DateTime, Municipality, Where };
