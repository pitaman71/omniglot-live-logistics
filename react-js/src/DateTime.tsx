import React from 'react';
import * as Introspection from 'typescript-introspection';
import { DateTime } from 'omniglot-live-logistics-models';
import * as Controls from './Controls';
import './DateTime.css';

export const Summary: Controls.Summary<DateTime.Value> = ({ 
    domain,
    value, 
    client,
    children
}): JSX.Element => {
    if (!value?.date && !value?.time) {
        return <React.Fragment>{children}</React.Fragment>;
    }

    const asString = domain?.asString() || DateTime.Domain.asString();

    return (
        <div className="datetime-preview">
            {asString.to(value)}
        </div>
    );
};

export const Document: Controls.Document<DateTime.Value> = ({ 
    value, 
    client 
}): JSX.Element => {
    if (!value?.date && !value?.time) {
        return <div className="datetime-detail empty">No date/time specified</div>;
    }
    
    return (
        <div className="datetime-detail">
        {value.date && (
            <div className="date-section">
            <h3><span className="icon">📅</span> Date</h3>
            <div className="date-content">
            <div className="date-row">
            <span className="label">Year:</span>
            <span className="value">{value.date.year}</span>
            </div>
            <div className="date-row">
            <span className="label">Month:</span>
            <span className="value">{String(value.date.month).padStart(2, '0')}</span>
            </div>
            <div className="date-row">
            <span className="label">Day:</span>
            <span className="value">{String(value.date.day).padStart(2, '0')}</span>
            </div>
            </div>
            </div>
        )}
        {value.time && (
            <div className="time-section">
            <h3><span className="icon">⏰</span> Time</h3>
            <div className="time-content">
            <div className="time-row">
            <span className="label">Hour:</span>
            <span className="value">{String(value.time.hour).padStart(2, '0')}</span>
            </div>
            <div className="time-row">
            <span className="label">Minute:</span>
            <span className="value">{String(value.time.minute).padStart(2, '0')}</span>
            </div>
            {value.time.second !== undefined && (
                <div className="time-row">
                <span className="label">Second:</span>
                <span className="value">{String(value.time.second).padStart(2, '0')}</span>
                </div>
            )}
            {value.time.meridian && (
                <div className="time-row">
                <span className="label">Period:</span>
                <span className="value">{value.time.meridian.toUpperCase()}</span>
                </div>
            )}
            {value.time.zone && (
                <div className="time-row">
                <span className="label">Timezone:</span>
                <span className="value">{value.time.zone.name}</span>
                </div>
            )}
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