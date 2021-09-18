
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage.js';
//import EditEventPage from './pages/EditEventPage.js';
import { useState } from 'react';

function App() {
  const [eventToEdit, setEventToEdit] = useState()

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setEventToEdit={setEventToEdit} />
          </Route>
          <Route path="/create-event">
            <CreateEventPage />
          </Route>
          {/*<Route path="/edit-event">
            <EditEventPage eventToEdit={eventToEdit} />
          </Route>*/}
        </div>
      </Router>
    </div>

  );
}

export default App;
