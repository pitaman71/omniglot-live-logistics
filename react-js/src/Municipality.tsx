import React from 'react';
import * as Introspection from 'typescript-introspection';
import { Municipality, Place } from 'omniglot-live-logistics-models';
import { Controls } from '@pitaman71/omniglot-live-reactjs';
import './DateTime.css';

type MunicipalityLevel = keyof Municipality.Value;

export const Summary: Controls.Summary<Municipality.Value> = (props): JSX.Element => {
    if (props.kind !== 'scalar') {
        return <React.Fragment>{props.children}</React.Fragment>;
    }
    const { domain, value, client} = props.scalar;
    const asString = domain?.asString() || Municipality.Domain.asString();
    if (!value) {
        return <React.Fragment>{props.children}</React.Fragment>;
    }
    
    if(!asString) throw new Error('Expected Introspection.Parsing.Domain to implement asString');
    
    return (
        <div className="municipality-summary" onClick={() => client?.assign(value)}>
        <span className="icon">🌆</span>
        <span className="content">{asString.to(value)}</span>
        </div>
    );
};

export const Document: Controls.Document<Municipality.Value> = (props): JSX.Element => {
    const empty = () => <div className="municipality-detail empty">No location specified</div>;
    if (props.kind !== 'scalar') {
        return empty();
    }
    const { domain, value, client} = props.scalar;
    if (!value && !client) {
        return empty();
    }
    
    const updateLevel = (level: MunicipalityLevel, updates: Partial<Place.Value>) => {
        client?.assign({
            ...value,
            [level]: {
                ...value?.[level],
                ...updates
            }
        });
    };
    
    const levels: MunicipalityLevel[] = ['city', 'county', 'state', 'country'];
    return (
        <div className="municipality-detail">
        {levels.map((level) => (
            <div key={level} className="level-section">
            <h4>{level.charAt(0).toUpperCase() + level.slice(1)}</h4>
            <div className="fields">
            {client ? (
                <div className="field-inputs">
                <input
                type="text"
                className="value-input"
                value={value?.[level]?.shortName || ''}
                onChange={(e) => updateLevel(level, { shortName: e.target.value })}
                placeholder={`${level} short name`}
                />
                <input
                type="text"
                className="value-input"
                value={value?.[level]?.longName || ''}
                onChange={(e) => updateLevel(level, { longName: e.target.value })}
                placeholder={`${level} full name`}
                />
                {(level === 'state' || level === 'country') && (
                    <input
                    type="text"
                    className="value-input iso"
                    value={value?.[level]?.iso?.code || ''}
                    onChange={(e) => updateLevel(level, { 
                        iso: { standard: 'iso', ...value?.[level]?.iso, code: e.target.value }
                    })}
                    placeholder="ISO code"
                    />
                )}
                </div>
            ) : (
                <div className="field-display">
                <span className="value">
                {value?.[level]?.longName}
                {value?.[level]?.iso?.code && 
                    <span className="iso-code">({value[level].iso.code})</span>
                }
                </span>
                </div>
            )}
            </div>
            </div>
        ))}
        
        {client && (
            <div className="actions">
            <button onClick={() => client.clear()} className="clear-button">✖ Clear</button>
            </div>
        )}
        </div>
    );
};