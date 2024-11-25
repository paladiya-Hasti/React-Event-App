import React, { useState } from 'react';

const CreateEventForm = ({ onCreateEvent }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    type: '',
    maxAttendees: '',
    img: null, // This will hold the image file
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      setFormData(prevState => ({
        ...prevState,
        img: files[0], // Store the file in the state
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      ...formData,
      id: Date.now(), // Generate a unique ID using timestamp
    };
    onCreateEvent(newEvent);
    // Reset form after submission
    setFormData({
      name: '',
      description: '',
      date: '',
      location: '',
      type: '',
      maxAttendees: '',
      img: '', 
    });
  };

  return (
    <div className="container my-4">
    <h2 className="mb-4">Create a New Event</h2>
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        {/* Event Title */}
        <div className="col-md-6">
          <label htmlFor="event-title" className="form-label">Event Title:</label>
          <input
            type="text"
            id="event-title"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {/* Description */}
        <div className="col-md-12">
          <label htmlFor="event-description" className="form-label">Description:</label>
          <textarea
            id="event-description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          />
        </div>
        {/* Date */}
        <div className="col-md-6">
          <label htmlFor="event-date" className="form-label">Date:</label>
          <input
            type="date"
            id="event-date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        {/* Location */}
        <div className="col-md-6">
          <label htmlFor="event-location" className="form-label">Location:</label>
          <input
            type="text"
            id="event-location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter location"
            required
          />
        </div>
        {/* Event Type */}
        <div className="col-md-6">
          <label htmlFor="event-type" className="form-label">Event Type:</label>
          <select
            id="event-type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Select Type</option>
            <option value="Conference">Conference</option>
            <option value="Exhibition">Exhibition</option>
            <option value="Festival">Festival</option>
            <option value="Talk">Talk</option>
          </select>
        </div>
        {/* Max Attendees */}
        <div className="col-md-6">
          <label htmlFor="max-attendees" className="form-label">Max Attendees:</label>
          <input
            type="number"
            id="max-attendees"
            name="maxAttendees"
            value={formData.maxAttendees}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter maximum attendees"
            required
          />
        </div>
        {/* Image Upload */}
        <div className="col-md-12">
          <label htmlFor="event-image" className="form-label">Image:</label>
          <input
            type="file"
            id="event-image"
            name="img"
            onChange={handleImageChange}
            className="form-control"
            required
          />
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="btn btn-primary">Create Event</button>
      </div>
    </form>
  </div>
  
  );
};

export default CreateEventForm;
