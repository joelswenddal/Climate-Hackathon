import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';

export const CreateEventPage = () => {

    const [event_type, setEvent] = useState('');
    const [service_type, setService] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [zip, setZip] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory(); //to return to home page after adding

    const createEvent = async () => {
        const newEvent = { event_type, service_type, name, address, zip, email };
        const response = await fetch('/event/exchange', {
            method: 'POST',
            body: JSON.stringify(newEvent),
            headers: {
                'Content-Type': 'application/json'
            },

        });
        if (response.status === 201) {
            alert("Event added successfully");
        } else {
            alert(`Failed to add event, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <header className="nav-bar">
                <div className="nav-links">
                    <p><Link className="App-link" to="/"><MdHome /></Link></p>
                </div>
            </header>
            <main id="create-event">
                <h1>Log an event</h1>
                <section className="input-block">
                    <p><label htmlFor="event_type_input">Fill out the form below:</label></p>
                    <p><input name="event_type_input"
                        id="event_type_input"
                        list="event_options"
                        type="text"
                        placeholder="Select event type"
                        value={event_type}
                        required
                        onChange={e => setEvent(e.target.value)} />

                        <datalist id="event_options">
                            <option value="Offer"></option>
                            <option value="Request"></option>
                        </datalist>
                    </p>
                    <p>
                        <input name="service_type_input"
                            id="service_type_input"
                            list="service_options"
                            type="text"
                            placeholder="Select service type here"
                            value={service_type}
                            required
                            onChange={e => setService(e.target.value)} />
                        <datalist id="service_options">
                            <option value="Drinking water"></option>
                            <option value="Canned food"></option>
                            <option value="Transportation"></option>
                            <option value="Blankets"></option>
                            <option value="Sandbags"></option>
                        </datalist>
                    </p>
                    <p>
                        <input name="name_input"
                            id="name_input"
                            type="text"
                            placeholder="Enter name"
                            value={name}
                            required
                            onChange={e => setName(e.target.value)} />
                    </p>
                    <p>
                        <input name="address_input"
                            id="address_input"
                            type="text"
                            placeholder="Enter street address"
                            value={address}
                            required
                            onChange={e => setAddress(e.target.value)} />
                    </p>
                    <input name="zip_input"
                        id="zip_input"
                        type="text"
                        placeholder="Enter zip code"
                        value={zip}
                        maxLength="5"
                        minLength="5"
                        required
                        onChange={e => setZip(e.target.value)} />
                    <p>
                        <input name="email_input"
                            id="email_input"
                            type="email"
                            placeholder="Enter valid email"
                            value={email}

                            required
                            onChange={e => setEmail(e.target.value)} />
                    </p>
                    <p>
                        <button
                            onClick={createEvent}
                        >Log your event</button>
                    </p>
                </section>
            </main>
        </div>
    );
}

export default CreateEventPage;




