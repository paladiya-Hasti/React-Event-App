const EditEventForm = ({ event, onSave, onCancel }) => {
  const [formData, setFormData] = useState(event);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Save the edited event
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <h3>Edit Event</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Event Name"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Event Description"
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Type"
      />
      <input
        type="number"
        name="maxAttendees"
        value={formData.maxAttendees}
        onChange={handleChange}
        placeholder="Max Attendees"
      />
      <div>
        <button type="submit" className="btn btn-success">Save</button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
      <div>
  {editingEvent ? (
    <EditEventForm
      event={editingEvent}
      onSave={saveEdit}
      onCancel={() => setEditingEvent(null)}
    />
  ) : (
    events.map((event) => (
      <EventItem
        key={event.id}
        event={event}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    ))
  )}
</div>

    </form>
  );
};
