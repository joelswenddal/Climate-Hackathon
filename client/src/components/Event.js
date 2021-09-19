import React from 'react';

function Event({ event }) {
    return (
        <div>
            <p>Name: {event.name}</p>
            <p>Event Type: {event.event_type}</p>
            <p>Service Type: {event.service_type}</p>
            <p>Zip: {event.zip}</p>
            <p>Contact them at: {event.email}</p>

        </div>
    )
}

export default Event;

