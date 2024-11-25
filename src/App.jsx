import React, { useState } from 'react';
import EventFilter from './pages/EventFiler';
import CreateEventForm from './pages/CreateEventForm';
import EventList from './pages/EventList';
import Navbar from './compoment/Navbar';
import Home from './pages/Home';

import './App.css'
import Footer from './compoment/Footer';
import EventItem from './pages/EventItem';
const App = () => {
  // Initial state for events and filter
  const [filter, setFilter] = useState({
    date: '',
    location: '',
    type: '',
  });

  const [events, setEvents] = useState([
    { id: 1, name: "Tech Conference", description: "A conference about technology", date: "2024-12-10", location: "New York", type: "Conference", maxAttendees: 200 ,img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F893847573%2F2253074144813%2F1%2Foriginal.20241107-115049?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=3ae2c7e885ed79a61058c2ab273ebbdc'},
    { id: 2, name: "Art Exhibition", description: "Contemporary art exhibition", date: "2024-12-15", location: "San Francisco", type: "Exhibition", maxAttendees: 100 ,img:'https://cdn.evbstatic.com/s3-build/fe/build/images/5caa41a13f2295ca7e49f9be22b150ff-holiday_category_mobile.webp'},
    { id: 3, name: "Music Festival", description: "A fun music festival", date: "2024-12-20", location: "Los Angeles", type: "Festival", maxAttendees: 500 ,img:'https://cdn.evbstatic.com/s3-build/fe/build/images/6505927c261d9e1851a3060027437974-holiday_category_desktop.webp'},
    { id: 4, name: "Science Talk", description: "Scientific discussion on the future", date: "2024-12-12", location: "Boston", type: "Talk", maxAttendees: 150 , img:'https://cdn.evbstatic.com/s3-build/fe/build/images/5caa41a13f2295ca7e49f9be22b150ff-holiday_category_mobile.webp'},
    { id: 1, name: "Tech Conference", description: "A conference about technology", date: "2024-12-10", location: "New York", type: "Conference", maxAttendees: 200 ,img:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F893847573%2F2253074144813%2F1%2Foriginal.20241107-115049?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=3ae2c7e885ed79a61058c2ab273ebbdc'},
    { id: 2, name: "Art Exhibition", description: "Contemporary art exhibition", date: "2024-12-15", location: "San Francisco", type: "Exhibition", maxAttendees: 100 ,img:'https://cdn.evbstatic.com/s3-build/fe/build/images/5caa41a13f2295ca7e49f9be22b150ff-holiday_category_mobile.webp'},
    { id: 3, name: "Music Festival", description: "A fun music festival", date: "2024-12-20", location: "Los Angeles", type: "Festival", maxAttendees: 500 ,img:'https://cdn.evbstatic.com/s3-build/fe/build/images/6505927c261d9e1851a3060027437974-holiday_category_desktop.webp'},
    { id: 4, name: "Science Talk", description: "Scientific discussion on the future", date: "2024-12-12", location: "Boston", type: "Talk", maxAttendees: 150 , img:'https://cdn.evbstatic.com/s3-build/fe/build/images/5caa41a13f2295ca7e49f9be22b150ff-holiday_category_mobile.webp'},
    { id: 4, name: "Science Talk", description: "Scientific discussion on the future", date: "2024-12-12", location: "Boston", type: "Talk", maxAttendees: 150 , img:'https://cdn.evbstatic.com/s3-build/fe/build/images/5caa41a13f2295ca7e49f9be22b150ff-holiday_category_mobile.webp'},
  ]);
  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id)); // Remove the event from state
  };
  


  const handleCreateEvent = (newEvent) => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
  };

 
  const filteredEvents = events.filter(event => {
    return (
      (filter.date === '' || event.date === filter.date) &&
      (filter.location === '' || event.location === filter.location) &&
      (filter.type === '' || event.type === filter.type)
    );
  });

  return (
    <div>
      <Navbar/>
      <Home/> 
      <h1 className='text-center p-4'>Upcoming Events</h1>
      <CreateEventForm onCreateEvent={handleCreateEvent} />

      <div>
      
    </div>
      <EventFilter setFilter={setFilter} />
      
      <EventList events={filteredEvents} onDeleteEvent={handleDeleteEvent} />
      
      
            <Footer/>
      </div>
 
  );
};

export default App;
