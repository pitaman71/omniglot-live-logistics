import React from 'react';
import DateTime from 'omniglot-live-media-models/lib/DateTime';
import './DateTime.css';

export const Preview = ({ 
  value, 
  client
}: { 
  value: DateTime, 
  client?: { 
    assign: (value_: DateTime) => void, 
    clear: () => void 
  } 
}): JSX.Element => {
  if (!value?.date && !value?.time) {
    return <span className="datetime-preview empty">Not specified</span>;
  }

  return (
    <div className="datetime-preview" onClick={() => client?.assign(value)}>
      {value.date && (
        <span className="date">
          <span className="icon">📅</span>
          {`${value.date.year}-${String(value.date.month).padStart(2, '0')}-${String(value.date.day).padStart(2, '0')}`}
        </span>
      )}
      {value.time && (
        <span className="time">
          <span className="icon">⏰</span>
          {`${String(value.time.hour).padStart(2, '0')}:${String(value.time.minute).padStart(2, '0')}`}
          {value.time.second !== undefined && `:${String(value.time.second).padStart(2, '0')}`}
          {value.time.meridian && ` ${value.time.meridian.toUpperCase()}`}
          {value.time.zone?.name && ` (${value.time.zone.name})`}
        </span>
      )}
    </div>
  );
};

export const Detail = ({ 
  value, 
  client 
}: { 
  value: DateTime, 
  client?: { 
    assign: (value_: DateTime) => void, 
    clear: () => void 
  } 
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