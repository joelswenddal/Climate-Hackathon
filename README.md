# OSU Beaverhacks Hackathon Project - Fall 2021

### Event theme: Climate Change and Energy

### Team members: Colin Cumins, Joel Swenddal, Yuhe Chen (all OSU students)

## Table of contents

- [Project rationale and concept](#project-rational-and-concept)
- [Technologies](#technologies)
- [Achievements](#achievements)
- [Improvements](#improvements)
- [Future Expansions](#future-expansions)
- [Setup](#setup)

## Project rationale and concept

The Fall 2021 Beaverhacks Hackathon at Oregon State University focused on the theme of Climate Change and Energy. Our team observed that in recent years because of the increase in the number of extreme weather events that have been linked to climate change, the need for various types of resources during disaster situations seems to be on the rise.

In response to this, our team developed a concept for a web application that allows people in need of emergency services to be connected with service providers in their geographical area who are willing and able to provide those services. We noticed that during disasters, many people in need of support have trouble connecting with those in their area who are able to provide the support. The idea of ‘matching’ requests for various resources (e.g. drinking water, canned food, etc) with offers for these resources in a geographical region was appealing to us, so we aimed to set up a basic web application to facilitate such matches.

Our team members are all relatively new to using the MERN stack for web development, so we were eager to expand our skills in this area. We were also new to using an API to retrieve and process geolocation data, so we wanted to explore this as well.

We identified the initial goal of deploying a full stack web app that would match a user-created event (request or offer of resources) with their closest ‘match’ in terms of geographical location and type of service/resource. This basic matching functionality was seen as a key achievement for a prototype version of the app, with more complex features to be added in later versions. 

## Technologies
- Node.js
- Express.js
- MongoDB
- React

## Achievements
Although we were not able to deploy a fully functional application by the end of the hackathon, the team worked well together and we were able to mark significant achievements in developing all areas of the stack. This was first and foremost a learning experience for all. Key accomplishments include:
- Deploying RESTful API that supports all basic CRUD operations
- Persisting app data in a MongoDB database, first locally and then in the cloud using MongoAtlas
- Retrieving geolocation data from Google Maps API and associate it with support events (requests and offers) data from the user
- Developing a basic front end that successfully uses the API and returns records to the user

## Improvements
To complete the first version of the application, the following features need to be completed:
- The application still runs only locally and has not been deployed to a hosting service
- Functions to sort the data and return the closest records that meet the criteria
- Return the match data to the user for display (currently the app will return data, but not yet the actual matched output)

## Future Expansions
For later versions: 
- App needs security features, visual display of geo data to support user experience
- Future modules could add communications functionality (e-mail, messaging, etc). 
Some climate events could also affect network functionality, so modules allowing for temporary offline operation or asynchronous updates could be helpful.

## Setup
Install node.js (v14.17.6), node package manager (v6.14.15) and MongoDB (version 4.4.7).
Run npm install and npm start in the client directory (for the front end -- on PORT 8000) and npm install and npm run development in the main directory (for the back end -- on PORT 3000).


