import React from 'react';
import { Where, Parseable } from 'omniglot-live-logistics-models';
import * as AddressComponents from './Address';
import * as MunicipalityComponents from './Municipality';
import * as Controls from './Controls';
import './Where.css';

const ParseableDomain = new Parseable.Domain(Where.Domain);
const asString = ParseableDomain.asString();

export const Summary: Controls.Summary<Where.Value> = ({
  value,
  client,
  children
}): JSX.Element => {
  if (!value?.name) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  if(!asString) throw new Error('Expected Parseable.Domain to implement asString');

  return (
    <div className="where-summary" onClick={() => client?.assign(value)}>
      <span className="icon">📍</span>
      {asString.to(value)}
    </div>
  );
};

export const Document: Controls.Document<Where.Value> = ({
  value,
  client
}): JSX.Element => {
  if (!value && !client) {
    return <div className="where-detail empty">Location not specified</div>;
  }

  return (
    <div className="where-detail">
      <div className="name-section">
        <h3><span className="icon">📍</span> Location</h3>
        <div className="name-content">
          <div className="name-row">
            <span className="label">Name:</span>
            {client ? (
              <input
                type="text"
                className="value-input"
                value={value?.name || ''}
                onChange={(e) => client.assign({ ...value, name: e.target.value })}
                placeholder="Location name"
              />
            ) : (
              <span className="value">{value?.name}</span>
            )}
          </div>
          <div className="name-row">
            <span className="label">Place ID:</span>
            {client ? (
              <input
                type="text"
                className="value-input"
                value={value?.googlePlaceId || ''}
                onChange={(e) => client.assign({ name:"", ...value, googlePlaceId: e.target.value })}
                placeholder="Google Place ID"
              />
            ) : (
              <span className="value">{value?.googlePlaceId}</span>
            )}
          </div>
        </div>
      </div>

      <div className="address-section">
        <h3><span className="icon">🏠</span> Address</h3>
        <AddressComponents.Document 
          value={value?.address}
          client={client && {
            assign: (address) => client.assign({ name:"", ...value, address }),
            clear: () => client.assign({ name:"", ...value, address: undefined })
          }}
        />
      </div>

      <div className="municipality-section">
        <h3><span className="icon">🌆</span> Municipality</h3>
        <MunicipalityComponents.Document
          value={value?.municipality}
          client={client && {
            assign: (municipality) => client.assign({ name:"", ...value, municipality }),
            clear: () => client.assign({ name:"", ...value, municipality: undefined })
          }}
        />
      </div>

      {(value?.geo || client) && (
        <div className="geo-section">
          <h3><span className="icon">🌍</span> Geographic Coordinates</h3>
          <div className="geo-content">
            <div className="geo-row">
              <span className="label">Coordinates:</span>
              {client ? (
                <div className="geo-inputs">
                  <input
                    type="number"
                    className="value-input coordinate"
                    value={value?.geo?.point?.lat || ''}
                    onChange={(e) => client.assign({
                      name:"", 
                      ...value,
                      geo: {
                        ...value?.geo,
                        point: {
                          ...value?.geo?.point,
                          lat: parseFloat(e.target.value)
                        }
                      }
                    })}
                    placeholder="Latitude"
                    step="0.000001"
                  />
                  <input
                    type="number"
                    className="value-input coordinate"
                    value={value?.geo?.point?.lng || ''}
                    onChange={(e) => client.assign({
                      name:"", 
                      ...value,
                      geo: {
                        ...value?.geo,
                        point: {
                          ...value?.geo?.point,
                          lng: parseFloat(e.target.value)
                        }
                      }
                    })}
                    placeholder="Longitude"
                    step="0.000001"
                  />
                </div>
              ) : (
                <span className="value">
                  {value?.geo?.point && 
                    `${value?.geo.point.lat?.toFixed(6)}, ${value?.geo.point.lng?.toFixed(6)}`
                  }
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {client && (
        <div className="actions">
          <button onClick={() => client.clear()} className="clear-button">✖ Clear</button>
        </div>
      )}
    </div>
  );
};