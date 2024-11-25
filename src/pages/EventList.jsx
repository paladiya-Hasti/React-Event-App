


import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events, onDeleteEvent }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-dark p-3" >Event List</h2>
      {events.length > 0 ? (
        <div className="row">
          {events.map((event) => (
            <div className="col-md-6 col-lg-4 mb-4" key={event.id}>
              <EventItem event={event} onDeleteEvent={onDeleteEvent} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-muted">No events found</p>
        </div>
      )}
    </div>
  );
};

export default EventList;
