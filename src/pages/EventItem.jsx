


import React, { useState } from "react";

const EventItem = ({ event, onUpdateEvent, onDeleteEvent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...event });
  const [previewImg, setPreviewImg] = useState(event.img || "");

  // Toggle edit form
  const toggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImg(reader.result); // Preview the image
        setFormData({ ...formData, img: reader.result }); // Save base64 image data
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the event "${event.name}"?`
    );
    if (confirmDelete) {
      onDeleteEvent(event.id); // Pass the event ID to the parent for deletion
    }
  };

  // Submit the form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onUpdateEvent(formData); // Pass updated data to parent component or API
    setIsEditing(false); // Close the form after submitting
  };

  return (
    <div className="card shadow mb-4">
      <div>
        {/* Display/Edit Form */}
        {isEditing ? (
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control"
              />
              {previewImg && (
                <img
                  src={previewImg}
                  alt="Preview"
                  className="img-thumbnail mt-2"
                  style={{ maxHeight: "150px" }}
                />
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Max Attendees</label>
              <input
                type="number"
                name="maxAttendees"
                value={formData.maxAttendees}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
         
            <button type="submit" className="btn btn-primary me-2">
              Save
            </button>
            <button
              type="button"
              onClick={toggleEditForm}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div>
            {/* Display Section */}
            <div className={event.img ? "col-md-8" : "col-md-12"}>
              <div className="card-body">
                <h5 className="card-title text-dark"> <strong>Title:</strong> {event.name}</h5>
                {event.img && (
                  <img
                    src={event.img}
                    alt={event.name}
                    className="img"
                    style={{ maxHeight: "200px" }}
                  />
                )}
                <p className="card-text">
                  <strong>Description:</strong> {event.description}
                </p>
                <p className="card-text">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="card-text">
                  <strong>Location:</strong> {event.location}
                </p>
                <p className="card-text">
                  <strong>Type:</strong> {event.type}
                </p>
                <p className="card-text">
                  <strong>Max Attendees:</strong> {event.maxAttendees}
                </p>
                
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Footer Section */}
      {!isEditing && (
        <div className="card-footer d-flex justify-content-between align-items-center">
          <p className="mb-0">
            <strong>Image:</strong> {event.img ? "Uploaded" : "No image uploaded"}
          </p>
          <div>
            <button
              className="btn btn-sm btn-warning me-2"
              onClick={toggleEditForm}
            >
              <i className="ri-file-edit-fill"></i>
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={handleDelete} // Attach delete handler
            >
              <i className="ri-delete-bin-fill"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventItem;
