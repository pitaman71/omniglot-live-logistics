import React from 'react';
import * as Introspection from 'typescript-introspection';
import { Date } from 'omniglot-live-logistics-models';
import * as Controls from './Controls';
import './Date.css';

export const Summary: Controls.Summary<Date.Value> = ({ domain, value, client, children }): JSX.Element => {
    if (!value) {
      return <React.Fragment>{children}</React.Fragment>;
    }

    const asString = domain?.asString() || Date.Domain.asString();

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

export const Document: Controls.Document<Date.Value> = ({
  value,
  client
}): JSX.Element => {
    if (!value && !client) {
        return <div className="date-detail empty">No date specified</div>;
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