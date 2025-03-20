import React from 'react';
import { Address } from 'omniglot-live-logistics-models';
import { Controls } from '@pitaman71/omniglot-live-reactjs';
import './Address.css';

export const Summary: Controls.Summary<Address.Value> = (props): JSX.Element => {
    if (props.kind !== 'scalar') {
        return <React.Fragment>{props.children}</React.Fragment>;
    }
    const { domain, value, client} = props.scalar;
    const asString = domain?.asString() || Address.Domain.asString();

    if (!value || !asString) {
        return <React.Fragment>{props.children}</React.Fragment>;
    }


    return (
        <div className="address-summary">
            <span className="icon">🏠</span>
            <span className="content">{asString.to(value)}</span>
        </div>
    );
};

export const Document: Controls.Document<Address.Value> = (props): JSX.Element => {
    if(props.kind !== 'scalar') {
        return <div className="address-detail empty">No address specified</div>;
    }
    const { domain, value, client } = props.scalar;
    if (!value && !client) {
        return <div className="address-detail empty">No address specified</div>;
    }

    const asString = domain?.asString() || Address.Domain.asString();

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