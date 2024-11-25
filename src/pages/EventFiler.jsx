import React, { useState } from 'react';

const EventFilter = ({ setFilter }) => {
  const [localFilter, setLocalFilter] = useState({
    date: '',
    location: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilter(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    setFilter(localFilter);
  };

  return (
    <div className="container my-4">
    <h2 className="mb-4">Filter Events</h2>
    <div className="row g-3">
      <div className="col-md-4">
        <label htmlFor="filter-date" className="form-label">Date:</label>
        <input
          type="date"
          id="filter-date"
          name="date"
          value={localFilter.date}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="filter-location" className="form-label">Location:</label>
        <input
          type="text"
          id="filter-location"
          name="location"
          value={localFilter.location}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter location"
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="filter-type" className="form-label">Event Type:</label>
        <select
          id="filter-type"
          name="type"
          value={localFilter.type}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">All</option>
          <option value="Conference">Conference</option>
          <option value="Exhibition">Exhibition</option>
          <option value="Festival">Festival</option>
          <option value="Talk">Talk</option>
        </select>
      </div>
    </div>
    <div className="mt-3">
      <button className="btn btn-primary" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  </div>
  
  );
};

export default EventFilter;
