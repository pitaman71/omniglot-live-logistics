import React from 'react';
import Address from 'omniglot-live-media-models/lib/Address';
import './Address.css';

export const Summary = ({
  value,
  client
}: {
  value?: Address,
  client?: {
    assign: (value_: Address) => void,
    clear: () => void
  }
}): JSX.Element => {
  if (!value?.addressLine1) {
    return <span className="address-summary empty">No address</span>;
  }

  const addressSummary = [
    value.addressLine1,
    value.addressLine2,
    value.postalCode
  ].filter(Boolean).join(', ');

  return (
    <div className="address-summary" onClick={() => client?.assign(value)}>
      <span className="icon">🏠</span>
      <span className="content">{addressSummary}</span>
    </div>
  );
};

export const Detail = ({
  value,
  client
}: {
  value?: Address,
  client?: {
    assign: (value_: Address) => void,
    clear: () => void
  }
}): JSX.Element => {
  if (!value && !client) {
    return <div className="address-detail empty">No address specified</div>;
  }

  return (
    <div className="address-detail">
      <div className="fields">
        <div className="field-row">
          <span className="label">Line 1:</span>
          {client ? (
            <input
              type="text"
              className="value-input"
              value={value?.addressLine1 || ''}
              onChange={(e) => client.assign({ ...value, addressLine1: e.target.value })}
              placeholder="Street address"
            />
          ) : (
            <span className="value">{value?.addressLine1}</span>
          )}
        </div>
        <div className="field-row">
          <span className="label">Line 2:</span>
          {client ? (
            <input
              type="text"
              className="value-input"
              value={value?.addressLine2 || ''}
              onChange={(e) => client.assign({ ...value, addressLine2: e.target.value })}
              placeholder="Additional address info"
            />
          ) : (
            <span className="value">{value?.addressLine2}</span>
          )}
        </div>
        <div className="field-row">
          <span className="label">Postal Code:</span>
          {client ? (
            <input
              type="text"
              className="value-input"
              value={value?.postalCode || ''}
              onChange={(e) => client.assign({ ...value, postalCode: e.target.value })}
              placeholder="Postal code"
            />
          ) : (
            <span className="value">{value?.postalCode}</span>
          )}
        </div>
      </div>
      
      {client && (
        <div className="actions">
          <button onClick={() => client.clear()} className="clear-button">✖ Clear</button>
        </div>
      )}
    </div>
  );
};