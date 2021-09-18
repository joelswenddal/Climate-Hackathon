import React from 'react';
import { Link } from 'react-router-dom';
//import EventList from '../components/EventList';
//import { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
import { MdHome } from 'react-icons/md';

function HomePage({ setEventToEdit }) {

    //const [event, setEvent] = useState([]);
    //const history = useHistory();

    return (

        <>
            <header className="nav-bar">
                <div className="nav-links">
                    <p><Link className="App-link" to="/"><MdHome /></Link></p>
                </div>
            </header>
            <main>
                <div>
                    <h2>Welcome!</h2>
                    <p>This site allows users to request or offer help to people in their area in emergencies</p>
                </div>
                <Link className="App-link" to="/create-event">Create a help event</Link>
            </main>
        </>
    )


}

export default HomePage;