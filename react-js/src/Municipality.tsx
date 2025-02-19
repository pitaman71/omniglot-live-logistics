import React from 'react';
import Municipality from 'omniglot-live-media-models/lib/Municipality';
import Place from 'omniglot-live-media-models/lib/Place';
import './Municipality.css';

type MunicipalityLevel = keyof Municipality;

export const Summary = ({
  value,
  client
}: {
  value?: Municipality,
  client?: {
    assign: (value_: Municipality) => void,
    clear: () => void
  }
}): JSX.Element => {
  if (!value?.city && !value?.state && !value?.country) {
    return <span className="municipality-summary empty">No location</span>;
  }

  const locationSummary = [
    value.city?.shortName,
    value.state?.shortName,
    value.country?.shortName
  ].filter(Boolean).join(', ');

  return (
    <div className="municipality-summary" onClick={() => client?.assign(value)}>
      <span className="icon">🌆</span>
      <span className="content">{locationSummary}</span>
    </div>
  );
};

export const Detail = ({
  value,
  client
}: {
  value?: Municipality,
  client?: {
    assign: (value_: Municipality) => void,
    clear: () => void
  }
}): JSX.Element => {
  if (!value && !client) {
    return <div className="municipality-detail empty">No location specified</div>;
  }

  const updateLevel = (level: MunicipalityLevel, updates: Partial<Place>) => {
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
                      iso: { ...value?.[level]?.iso, code: e.target.value }
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