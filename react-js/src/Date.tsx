import React from 'react';
import * as Introspection from 'typescript-introspection';
import { Date } from 'omniglot-live-logistics-models';
import { Controls } from '@pitaman71/omniglot-live-reactjs';
import './Date.css';

export const Summary: Controls.Summary<Date.Value> = (props): JSX.Element => {
    if (props.kind !== 'scalar') {
        return <React.Fragment>{props.children}</React.Fragment>;
    }
    const { domain, value, client} = props.scalar;
    const asString = domain?.asString() || Date.Domain.asString();
    if (!value || !asString) {
        return <React.Fragment>{props.children}</React.Fragment>;
    }
        
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsed = asString.from(e.target.value);
        if(parsed === null) client?.clear();
        else client?.assign(parsed);
    };
    
    if (client) {
        return (<input
            type="date"
            className="date-summary editable"
            value={asString.to(value)||undefined}
            onChange={handleDateChange}
            />);
        }
        
        return (
            <div className="date-summary">
            <span className="icon">📅</span>
            <span className="content">{asString.to(value)}</span>
            </div>
        );
    };
    
    export const Document: Controls.Document<Date.Value> = (props): JSX.Element => {
        const empty = () => <div className="date-detail empty">No date specified</div>;
        if (props.kind !== 'scalar') {
            return empty();
        }
        const { domain, value, client} = props.scalar;
        if (!value && !client) {
            return empty();
        }
        
        return (
            <div className="date-detail">
            <div className="field-row">
            <span className="label">Year:</span>
            <span className="value">{value?.year}</span>
            </div>
            <div className="field-row">
            <span className="label">Month:</span>
            <span className="value">{value?.month}</span>
            </div>
            <div className="field-row">
            <span className="label">Day:</span>
            <span className="value">{value?.day}</span>
            </div>        
            </div>      
        );
    };