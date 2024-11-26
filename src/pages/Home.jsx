import React, { useState } from 'react'
import Footer from '../compoment/Footer'
import EventList from './EventList'
 
import EventFilter from './EventFiler'

export const Home = () => {
  const [filter, setFilter] = useState({
    date: "",
    location: "",
    type: "",
  });

  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Let's Go Visiting The World ",
      description: "A conference about technology",
      date: "2024-12-10",
      location: "New York",
      type: "Conference",
      maxAttendees: 200,
      img: "https://avatars.yandex.net/get-music-content/34131/2b7203d0.a.3682473-1/m1000x1000?webp=false",
    },
    {
      id: 2,
      name: " Surat Airport ",
      description: "Contemporary art exhibition",
      date: "2024-12-15",
      location: "San Francisco",
      type: "Exhibition",
      maxAttendees: 100,
      img: "https://avatars.mds.yandex.net/i?id=3cbd29cc64d5a5a8edbaffaf107934db0aaf15f0-10118230-images-thumbs&n=13",
    },
    {
      id: 3,
      name: "Road Trip",
      description: "A fun music festival",
      date: "2024-12-20",
      location: "Los Angeles",
      type: "Festival",
      maxAttendees: 500,
      img: "https://avatars.mds.yandex.net/i?id=0350dc9671ddb1d993981ae05e4b6c8a0758ff55-5234139-images-thumbs&n=13",
    },
    {
      id: 4,
      name: "Visit The Forest",
      description: "Scientific discussion on the future",
      date: "2024-12-12",
      location: "Boston",
      type: "Talk",
      maxAttendees: 150,
      img: "https://avatars.mds.yandex.net/i?id=26dc65e5583fc2df56a3e743ae3aced363c97743-4078569-images-thumbs&n=13",
    },
    {
      id: 1,
      name: "Tracking Forest",
      description: "A conference about technology",
      date: "2024-12-10",
      location: "New York",
      type: "Conference",
      maxAttendees: 200,
      img: "https://avatars.mds.yandex.net/i?id=56e4070e7f64a62e042e78c73e56c00acee9568a-7543982-images-thumbs&n=13",
    },
    {
      id: 2,
      name: "Van House",
      description: "Contemporary art exhibition",
      date: "2024-12-15",
      location: "San Francisco",
      type: "Exhibition",
      maxAttendees: 100,
      img: "https://i.pinimg.com/originals/07/86/1e/07861e8bafe6ff7c25f05e6fa7922c98.jpg",
    },
    {
      id: 3,
      name: "Music Festival",
      description: "A fun music festival",
      date: "2024-12-20",
      location: "Los Angeles",
      type: "Festival",
      maxAttendees: 500,
      img: "https://avatars.mds.yandex.net/i?id=c769616a3d81e2c95712111d9581928eb17bdd39-12539473-images-thumbs&n=13",
    },
    {
      id: 4,
      name: "Science Talk",
      description: "Scientific discussion on the future",
      date: "2024-12-12",
      location: "Boston",
      type: "Talk",
      maxAttendees: 150,
      img: "https://avatars.mds.yandex.net/i?id=9829633ef488709e035f7a9d9d5d8461b6733004-4956373-images-thumbs&n=13",
    },
    {
      id: 4,
      name: "Science Talk",
      description: "Scientific discussion on the future",
      date: "2024-12-12",
      location: "Boston",
      type: "Talk",
      maxAttendees: 150,
      img: "https://i.pinimg.com/736x/51/9a/f1/519af16607bcc521b89e5e9a16b72945--travel-pictures-travel-photos.jpg",
    },
  ]);
  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id)); // Remove the event from state
  };

  const handleCreateEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const filteredEvents = events.filter((event) => {
    return (
      (filter.date === "" || event.date === filter.date) &&
      (filter.location === "" || event.location === filter.location) &&
      (filter.type === "" || event.type === filter.type)
    );
  });

  return (
    <div>
      <h1 className="text-center p-4">Upcoming Events</h1>
      <EventFilter setFilter={setFilter} />

      <EventList
        events={filteredEvents}
        onCreateEvent={handleCreateEvent}
        onDeleteEvent={handleDeleteEvent}
      />

      <Footer />
    </div>
  )
}
