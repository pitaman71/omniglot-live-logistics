"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Address: () => Address_exports,
  DateTime: () => DateTime_exports,
  Municipality: () => Municipality_exports,
  Where: () => Where_exports
});
module.exports = __toCommonJS(index_exports);

// src/Address.tsx
var Address_exports = {};
__export(Address_exports, {
  Detail: () => Detail,
  Summary: () => Summary
});
var import_jsx_runtime = require("react/jsx-runtime");
var Summary = ({
  value,
  client
}) => {
  if (!value?.addressLine1) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "address-summary empty", children: "No address" });
  }
  const addressSummary = [
    value.addressLine1,
    value.addressLine2,
    value.postalCode
  ].filter(Boolean).join(", ");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "address-summary", onClick: () => client?.assign(value), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "icon", children: "\u{1F3E0}" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "content", children: addressSummary })
  ] });
};
var Detail = ({
  value,
  client
}) => {
  if (!value && !client) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "address-detail empty", children: "No address specified" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "address-detail", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "fields", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "field-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "label", children: "Line 1:" }),
        client ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.addressLine1 || "",
            onChange: (e) => client.assign({ ...value, addressLine1: e.target.value }),
            placeholder: "Street address"
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "value", children: value?.addressLine1 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "field-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "label", children: "Line 2:" }),
        client ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.addressLine2 || "",
            onChange: (e) => client.assign({ ...value, addressLine2: e.target.value }),
            placeholder: "Additional address info"
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "value", children: value?.addressLine2 })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "field-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "label", children: "Postal Code:" }),
        client ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.postalCode || "",
            onChange: (e) => client.assign({ ...value, postalCode: e.target.value }),
            placeholder: "Postal code"
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "value", children: value?.postalCode })
      ] })
    ] }),
    client && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};

// src/DateTime.tsx
var DateTime_exports = {};
__export(DateTime_exports, {
  Detail: () => Detail2,
  Preview: () => Preview
});
var import_jsx_runtime2 = require("react/jsx-runtime");
var Preview = ({
  value,
  client
}) => {
  if (!value?.date && !value?.time) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "datetime-preview empty", children: "Not specified" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "datetime-preview", onClick: () => client?.assign(value), children: [
    value.date && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "date", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "icon", children: "\u{1F4C5}" }),
      `${value.date.year}-${String(value.date.month).padStart(2, "0")}-${String(value.date.day).padStart(2, "0")}`
    ] }),
    value.time && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "time", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "icon", children: "\u23F0" }),
      `${String(value.time.hour).padStart(2, "0")}:${String(value.time.minute).padStart(2, "0")}`,
      value.time.second !== void 0 && `:${String(value.time.second).padStart(2, "0")}`,
      value.time.meridian && ` ${value.time.meridian.toUpperCase()}`,
      value.time.zone?.name && ` (${value.time.zone.name})`
    ] })
  ] });
};
var Detail2 = ({
  value,
  client
}) => {
  if (!value?.date && !value?.time) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "datetime-detail empty", children: "No date/time specified" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "datetime-detail", children: [
    value.date && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "date-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "icon", children: "\u{1F4C5}" }),
        " Date"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "date-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "date-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "label", children: "Year:" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "value", children: value.date.year })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "date-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "label", children: "Month:" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "value", children: String(value.date.month).padStart(2, "0") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "date-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "label", children: "Day:" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "value", children: String(value.date.day).padStart(2, "0") })
        ] })
      ] })
    ] }),
    value.time && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "time-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h3", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "icon", children: "\u23F0" }),
        " Time"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "time-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "time-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "label", children: "Hour:" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "value", children: String(value.time.hour).padStart(2, "0") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "time-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "label", children: "Minute:" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "value", children: String(value.time.minute).padStart(2, "0") })
        ] }),
        value.time.second !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "time-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "label", children: "Second:" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "value", children: String(value.time.second).padStart(2, "0") })
        ] }),
        value.time.meridian && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "time-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "label", children: "Period:" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "value", children: value.time.meridian.toUpperCase() })
        ] }),
        value.time.zone && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "time-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "label", children: "Timezone:" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "value", children: value.time.zone.name })
        ] })
      ] })
    ] }),
    client && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};

// src/Municipality.tsx
var Municipality_exports = {};
__export(Municipality_exports, {
  Detail: () => Detail3,
  Summary: () => Summary2
});
var import_jsx_runtime3 = require("react/jsx-runtime");
var Summary2 = ({
  value,
  client
}) => {
  if (!value?.city && !value?.state && !value?.country) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "municipality-summary empty", children: "No location" });
  }
  const locationSummary = [
    value.city?.shortName,
    value.state?.shortName,
    value.country?.shortName
  ].filter(Boolean).join(", ");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "municipality-summary", onClick: () => client?.assign(value), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "icon", children: "\u{1F306}" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "content", children: locationSummary })
  ] });
};
var Detail3 = ({
  value,
  client
}) => {
  if (!value && !client) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "municipality-detail empty", children: "No location specified" });
  }
  const updateLevel = (level, updates) => {
    client?.assign({
      ...value,
      [level]: {
        ...value?.[level],
        ...updates
      }
    });
  };
  const levels = ["city", "county", "state", "country"];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "municipality-detail", children: [
    levels.map((level) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "level-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h4", { children: level.charAt(0).toUpperCase() + level.slice(1) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "fields", children: client ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "field-inputs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.[level]?.shortName || "",
            onChange: (e) => updateLevel(level, { shortName: e.target.value }),
            placeholder: `${level} short name`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.[level]?.longName || "",
            onChange: (e) => updateLevel(level, { longName: e.target.value }),
            placeholder: `${level} full name`
          }
        ),
        (level === "state" || level === "country") && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            type: "text",
            className: "value-input iso",
            value: value?.[level]?.iso?.code || "",
            onChange: (e) => updateLevel(level, {
              iso: { ...value?.[level]?.iso, code: e.target.value }
            }),
            placeholder: "ISO code"
          }
        )
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "field-display", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "value", children: [
        value?.[level]?.longName,
        value?.[level]?.iso?.code && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "iso-code", children: [
          "(",
          value[level].iso.code,
          ")"
        ] })
      ] }) }) })
    ] }, level)),
    client && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};

// src/Where.tsx
var Where_exports = {};
__export(Where_exports, {
  Detail: () => Detail4,
  Summary: () => Summary3
});
var import_jsx_runtime4 = require("react/jsx-runtime");
var Summary3 = ({
  value,
  client
}) => {
  if (!value?.name) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "where-summary empty", children: "Location not specified" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "where-summary", onClick: () => client?.assign(value), children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "icon", children: "\u{1F4CD}" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "name", children: value.name }),
    (value.address || value.municipality) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "details", children: [
      value.address && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Summary, { value: value.address }),
      value.municipality && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Summary2, { value: value.municipality })
    ] })
  ] });
};
var Detail4 = ({
  value,
  client
}) => {
  if (!value && !client) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "where-detail empty", children: "Location not specified" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "where-detail", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "name-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h3", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "icon", children: "\u{1F4CD}" }),
        " Location"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "name-content", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "name-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "label", children: "Name:" }),
          client ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              type: "text",
              className: "value-input",
              value: value?.name || "",
              onChange: (e) => client.assign({ ...value, name: e.target.value }),
              placeholder: "Location name"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "value", children: value?.name })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "name-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "label", children: "Place ID:" }),
          client ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              type: "text",
              className: "value-input",
              value: value?.googlePlaceId || "",
              onChange: (e) => client.assign({ name: "", ...value, googlePlaceId: e.target.value }),
              placeholder: "Google Place ID"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "value", children: value?.googlePlaceId })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "address-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h3", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "icon", children: "\u{1F3E0}" }),
        " Address"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Detail,
        {
          value: value?.address,
          client: client && {
            assign: (address) => client.assign({ name: "", ...value, address }),
            clear: () => client.assign({ name: "", ...value, address: void 0 })
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "municipality-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h3", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "icon", children: "\u{1F306}" }),
        " Municipality"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Detail3,
        {
          value: value?.municipality,
          client: client && {
            assign: (municipality) => client.assign({ name: "", ...value, municipality }),
            clear: () => client.assign({ name: "", ...value, municipality: void 0 })
          }
        }
      )
    ] }),
    (value?.geo || client) && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "geo-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h3", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "icon", children: "\u{1F30D}" }),
        " Geographic Coordinates"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "geo-content", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "geo-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "label", children: "Coordinates:" }),
        client ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "geo-inputs", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              type: "number",
              className: "value-input coordinate",
              value: value?.geo?.point?.lat || "",
              onChange: (e) => client.assign({
                name: "",
                ...value,
                geo: {
                  ...value?.geo,
                  point: {
                    ...value?.geo?.point,
                    lat: parseFloat(e.target.value)
                  }
                }
              }),
              placeholder: "Latitude",
              step: "0.000001"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              type: "number",
              className: "value-input coordinate",
              value: value?.geo?.point?.lng || "",
              onChange: (e) => client.assign({
                name: "",
                ...value,
                geo: {
                  ...value?.geo,
                  point: {
                    ...value?.geo?.point,
                    lng: parseFloat(e.target.value)
                  }
                }
              }),
              placeholder: "Longitude",
              step: "0.000001"
            }
          )
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "value", children: value?.geo?.point && `${value?.geo.point.lat.toFixed(6)}, ${value?.geo.point.lng.toFixed(6)}` })
      ] }) })
    ] }),
    client && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "actions", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Address,
  DateTime,
  Municipality,
  Where
});
//# sourceMappingURL=index.js.map