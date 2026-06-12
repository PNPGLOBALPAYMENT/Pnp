import React, { useState } from 'react';
import './ClockSettings.css';

const ClockSettings = ({ is24Hour, setIs24Hour, timeZones, onAddTimeZone, onRemoveTimeZone }) => {
  const [selectedZone, setSelectedZone] = useState('');

  const availableTimeZones = [
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'Canada/Toronto', 'America/Mexico_City', 'America/Sao_Paulo', 'America/Buenos_Aires',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Europe/Madrid', 'Europe/Rome', 'Europe/Moscow',
    'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok', 'Asia/Hong_Kong', 'Asia/Shanghai', 'Asia/Tokyo', 'Asia/Seoul',
    'Africa/Cairo', 'Africa/Lagos', 'Africa/Johannesburg', 'Africa/Nairobi',
    'Australia/Sydney', 'Australia/Melbourne', 'Pacific/Auckland', 'Pacific/Fiji'
  ];

  const handleAddZone = () => {
    if (selectedZone) {
      onAddTimeZone(selectedZone);
      setSelectedZone('');
    }
  };

  return (
    <div className="settings-panel">
      <div className="settings-section">
        <h2>Settings</h2>
        <div className="setting-group">
          <label className="setting-label">
            <input type="checkbox" checked={is24Hour} onChange={(e) => setIs24Hour(e.target.checked)} />
            <span>24-Hour Format</span>
          </label>
        </div>
        <div className="setting-group">
          <label className="setting-label">Add Time Zone</label>
          <div className="add-zone-form">
            <select value={selectedZone} onChange={(e) => setSelectedZone(e.target.value)} className="zone-select">
              <option value="">Select a time zone...</option>
              {availableTimeZones
                .filter(zone => !timeZones.includes(zone))
                .map(zone => <option key={zone} value={zone}>{zone.split('/')[1]}</option>)}
            </select>
            <button className="add-btn" onClick={handleAddZone} disabled={!selectedZone}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClockSettings;
