var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/Address.tsx
var Address_exports = {};
__export(Address_exports, {
  Detail: () => Detail,
  Summary: () => Summary
});
import { jsx, jsxs } from "react/jsx-runtime";
var Summary = ({
  value,
  client
}) => {
  if (!value?.addressLine1) {
    return /* @__PURE__ */ jsx("span", { className: "address-summary empty", children: "No address" });
  }
  const addressSummary = [
    value.addressLine1,
    value.addressLine2,
    value.postalCode
  ].filter(Boolean).join(", ");
  return /* @__PURE__ */ jsxs("div", { className: "address-summary", onClick: () => client?.assign(value), children: [
    /* @__PURE__ */ jsx("span", { className: "icon", children: "\u{1F3E0}" }),
    /* @__PURE__ */ jsx("span", { className: "content", children: addressSummary })
  ] });
};
var Detail = ({
  value,
  client
}) => {
  if (!value && !client) {
    return /* @__PURE__ */ jsx("div", { className: "address-detail empty", children: "No address specified" });
  }
  return /* @__PURE__ */ jsxs("div", { className: "address-detail", children: [
    /* @__PURE__ */ jsxs("div", { className: "fields", children: [
      /* @__PURE__ */ jsxs("div", { className: "field-row", children: [
        /* @__PURE__ */ jsx("span", { className: "label", children: "Line 1:" }),
        client ? /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.addressLine1 || "",
            onChange: (e) => client.assign({ ...value, addressLine1: e.target.value }),
            placeholder: "Street address"
          }
        ) : /* @__PURE__ */ jsx("span", { className: "value", children: value?.addressLine1 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "field-row", children: [
        /* @__PURE__ */ jsx("span", { className: "label", children: "Line 2:" }),
        client ? /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.addressLine2 || "",
            onChange: (e) => client.assign({ ...value, addressLine2: e.target.value }),
            placeholder: "Additional address info"
          }
        ) : /* @__PURE__ */ jsx("span", { className: "value", children: value?.addressLine2 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "field-row", children: [
        /* @__PURE__ */ jsx("span", { className: "label", children: "Postal Code:" }),
        client ? /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.postalCode || "",
            onChange: (e) => client.assign({ ...value, postalCode: e.target.value }),
            placeholder: "Postal code"
          }
        ) : /* @__PURE__ */ jsx("span", { className: "value", children: value?.postalCode })
      ] })
    ] }),
    client && /* @__PURE__ */ jsx("div", { className: "actions", children: /* @__PURE__ */ jsx("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};

// src/DateTime.tsx
var DateTime_exports = {};
__export(DateTime_exports, {
  Detail: () => Detail2,
  Preview: () => Preview
});
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Preview = ({
  value,
  client
}) => {
  if (!value?.date && !value?.time) {
    return /* @__PURE__ */ jsx2("span", { className: "datetime-preview empty", children: "Not specified" });
  }
  return /* @__PURE__ */ jsxs2("div", { className: "datetime-preview", onClick: () => client?.assign(value), children: [
    value.date && /* @__PURE__ */ jsxs2("span", { className: "date", children: [
      /* @__PURE__ */ jsx2("span", { className: "icon", children: "\u{1F4C5}" }),
      `${value.date.year}-${String(value.date.month).padStart(2, "0")}-${String(value.date.day).padStart(2, "0")}`
    ] }),
    value.time && /* @__PURE__ */ jsxs2("span", { className: "time", children: [
      /* @__PURE__ */ jsx2("span", { className: "icon", children: "\u23F0" }),
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
    return /* @__PURE__ */ jsx2("div", { className: "datetime-detail empty", children: "No date/time specified" });
  }
  return /* @__PURE__ */ jsxs2("div", { className: "datetime-detail", children: [
    value.date && /* @__PURE__ */ jsxs2("div", { className: "date-section", children: [
      /* @__PURE__ */ jsxs2("h3", { children: [
        /* @__PURE__ */ jsx2("span", { className: "icon", children: "\u{1F4C5}" }),
        " Date"
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "date-content", children: [
        /* @__PURE__ */ jsxs2("div", { className: "date-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Year:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: value.date.year })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "date-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Month:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.date.month).padStart(2, "0") })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "date-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Day:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.date.day).padStart(2, "0") })
        ] })
      ] })
    ] }),
    value.time && /* @__PURE__ */ jsxs2("div", { className: "time-section", children: [
      /* @__PURE__ */ jsxs2("h3", { children: [
        /* @__PURE__ */ jsx2("span", { className: "icon", children: "\u23F0" }),
        " Time"
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "time-content", children: [
        /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Hour:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.time.hour).padStart(2, "0") })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Minute:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.time.minute).padStart(2, "0") })
        ] }),
        value.time.second !== void 0 && /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Second:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: String(value.time.second).padStart(2, "0") })
        ] }),
        value.time.meridian && /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Period:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: value.time.meridian.toUpperCase() })
        ] }),
        value.time.zone && /* @__PURE__ */ jsxs2("div", { className: "time-row", children: [
          /* @__PURE__ */ jsx2("span", { className: "label", children: "Timezone:" }),
          /* @__PURE__ */ jsx2("span", { className: "value", children: value.time.zone.name })
        ] })
      ] })
    ] }),
    client && /* @__PURE__ */ jsx2("div", { className: "actions", children: /* @__PURE__ */ jsx2("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};

// src/Municipality.tsx
var Municipality_exports = {};
__export(Municipality_exports, {
  Detail: () => Detail3,
  Summary: () => Summary2
});
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var Summary2 = ({
  value,
  client
}) => {
  if (!value?.city && !value?.state && !value?.country) {
    return /* @__PURE__ */ jsx3("span", { className: "municipality-summary empty", children: "No location" });
  }
  const locationSummary = [
    value.city?.shortName,
    value.state?.shortName,
    value.country?.shortName
  ].filter(Boolean).join(", ");
  return /* @__PURE__ */ jsxs3("div", { className: "municipality-summary", onClick: () => client?.assign(value), children: [
    /* @__PURE__ */ jsx3("span", { className: "icon", children: "\u{1F306}" }),
    /* @__PURE__ */ jsx3("span", { className: "content", children: locationSummary })
  ] });
};
var Detail3 = ({
  value,
  client
}) => {
  if (!value && !client) {
    return /* @__PURE__ */ jsx3("div", { className: "municipality-detail empty", children: "No location specified" });
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
  return /* @__PURE__ */ jsxs3("div", { className: "municipality-detail", children: [
    levels.map((level) => /* @__PURE__ */ jsxs3("div", { className: "level-section", children: [
      /* @__PURE__ */ jsx3("h4", { children: level.charAt(0).toUpperCase() + level.slice(1) }),
      /* @__PURE__ */ jsx3("div", { className: "fields", children: client ? /* @__PURE__ */ jsxs3("div", { className: "field-inputs", children: [
        /* @__PURE__ */ jsx3(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.[level]?.shortName || "",
            onChange: (e) => updateLevel(level, { shortName: e.target.value }),
            placeholder: `${level} short name`
          }
        ),
        /* @__PURE__ */ jsx3(
          "input",
          {
            type: "text",
            className: "value-input",
            value: value?.[level]?.longName || "",
            onChange: (e) => updateLevel(level, { longName: e.target.value }),
            placeholder: `${level} full name`
          }
        ),
        (level === "state" || level === "country") && /* @__PURE__ */ jsx3(
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
      ] }) : /* @__PURE__ */ jsx3("div", { className: "field-display", children: /* @__PURE__ */ jsxs3("span", { className: "value", children: [
        value?.[level]?.longName,
        value?.[level]?.iso?.code && /* @__PURE__ */ jsxs3("span", { className: "iso-code", children: [
          "(",
          value[level].iso.code,
          ")"
        ] })
      ] }) }) })
    ] }, level)),
    client && /* @__PURE__ */ jsx3("div", { className: "actions", children: /* @__PURE__ */ jsx3("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};

// src/Where.tsx
var Where_exports = {};
__export(Where_exports, {
  Detail: () => Detail4,
  Summary: () => Summary3
});
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var Summary3 = ({
  value,
  client
}) => {
  if (!value?.name) {
    return /* @__PURE__ */ jsx4("span", { className: "where-summary empty", children: "Location not specified" });
  }
  return /* @__PURE__ */ jsxs4("div", { className: "where-summary", onClick: () => client?.assign(value), children: [
    /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F4CD}" }),
    /* @__PURE__ */ jsx4("span", { className: "name", children: value.name }),
    (value.address || value.municipality) && /* @__PURE__ */ jsxs4("span", { className: "details", children: [
      value.address && /* @__PURE__ */ jsx4(Summary, { value: value.address }),
      value.municipality && /* @__PURE__ */ jsx4(Summary2, { value: value.municipality })
    ] })
  ] });
};
var Detail4 = ({
  value,
  client
}) => {
  if (!value && !client) {
    return /* @__PURE__ */ jsx4("div", { className: "where-detail empty", children: "Location not specified" });
  }
  return /* @__PURE__ */ jsxs4("div", { className: "where-detail", children: [
    /* @__PURE__ */ jsxs4("div", { className: "name-section", children: [
      /* @__PURE__ */ jsxs4("h3", { children: [
        /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F4CD}" }),
        " Location"
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "name-content", children: [
        /* @__PURE__ */ jsxs4("div", { className: "name-row", children: [
          /* @__PURE__ */ jsx4("span", { className: "label", children: "Name:" }),
          client ? /* @__PURE__ */ jsx4(
            "input",
            {
              type: "text",
              className: "value-input",
              value: value?.name || "",
              onChange: (e) => client.assign({ ...value, name: e.target.value }),
              placeholder: "Location name"
            }
          ) : /* @__PURE__ */ jsx4("span", { className: "value", children: value?.name })
        ] }),
        /* @__PURE__ */ jsxs4("div", { className: "name-row", children: [
          /* @__PURE__ */ jsx4("span", { className: "label", children: "Place ID:" }),
          client ? /* @__PURE__ */ jsx4(
            "input",
            {
              type: "text",
              className: "value-input",
              value: value?.googlePlaceId || "",
              onChange: (e) => client.assign({ name: "", ...value, googlePlaceId: e.target.value }),
              placeholder: "Google Place ID"
            }
          ) : /* @__PURE__ */ jsx4("span", { className: "value", children: value?.googlePlaceId })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "address-section", children: [
      /* @__PURE__ */ jsxs4("h3", { children: [
        /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F3E0}" }),
        " Address"
      ] }),
      /* @__PURE__ */ jsx4(
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
    /* @__PURE__ */ jsxs4("div", { className: "municipality-section", children: [
      /* @__PURE__ */ jsxs4("h3", { children: [
        /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F306}" }),
        " Municipality"
      ] }),
      /* @__PURE__ */ jsx4(
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
    (value?.geo || client) && /* @__PURE__ */ jsxs4("div", { className: "geo-section", children: [
      /* @__PURE__ */ jsxs4("h3", { children: [
        /* @__PURE__ */ jsx4("span", { className: "icon", children: "\u{1F30D}" }),
        " Geographic Coordinates"
      ] }),
      /* @__PURE__ */ jsx4("div", { className: "geo-content", children: /* @__PURE__ */ jsxs4("div", { className: "geo-row", children: [
        /* @__PURE__ */ jsx4("span", { className: "label", children: "Coordinates:" }),
        client ? /* @__PURE__ */ jsxs4("div", { className: "geo-inputs", children: [
          /* @__PURE__ */ jsx4(
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
          /* @__PURE__ */ jsx4(
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
        ] }) : /* @__PURE__ */ jsx4("span", { className: "value", children: value?.geo?.point && `${value?.geo.point.lat.toFixed(6)}, ${value?.geo.point.lng.toFixed(6)}` })
      ] }) })
    ] }),
    client && /* @__PURE__ */ jsx4("div", { className: "actions", children: /* @__PURE__ */ jsx4("button", { onClick: () => client.clear(), className: "clear-button", children: "\u2716 Clear" }) })
  ] });
};
export {
  Address_exports as Address,
  DateTime_exports as DateTime,
  Municipality_exports as Municipality,
  Where_exports as Where
};
//# sourceMappingURL=index.mjs.map