
import Event from '../models/event.model.js'
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'


// Note how this uses the mongoose methods to operate on the mongo db (e.g. find, findById, select, etc)

const create = async (req, res) => {
    const event = new Event(req.body)
    try {
        await event.save()
        return res.status(201).send({
            message: "Successfully registered an event!",
            data: event
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

/**
 * Load event from db and append to req (make new 'profile' key)
 */
const eventByID = async (req, res, next, id) => {
    try {
        let event = await Event.findById(id)
        if (!event)
            return res.status('400').json({
                error: "Event not found"
            })
        req.profile = event   //append the event to the request object in a profile key
        next()
    } catch (err) {
        return res.status('400').json({
            error: "Could not retrieve event"
        })
    }
}

const read = (req, res) => {
    //req.profile.hashed_password = undefined
    //req.profile.salt = undefined
    return res.json(req.profile)
}

const list = async (req, res) => {
    try {
        let events = await Event.find().select('event_type service_type name email updated created') //just selects these fields
        res.json(events)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const update = async (req, res) => {
    try {
        let event = req.profile
        event = extend(event, req.body)
        event.updated = Date.now()
        await event.save()
        //user.hashed_password = undefined
        //user.salt = undefined
        res.json(event)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let event = req.profile
        let deletedEvent = await event.remove()
        //deletedEvent.hashed_password = undefined
        //deletedEvent.salt = undefined
        res.json(deletedEvent)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const match = async (req, res) => {
    try {
        let event = req.profile
        //event = extend(event, req.body)
        //1) get zip; 2) use zip to calculate lat, long; 3) save to db
        //let zip = event.zip
        //let geoloc = event.geo.coordinates
        const lat = randomNumber(-90, 90)
        const long = randomNumber(-180, 180)
        event.geo.coordinates[0] = long
        event.geo.coordinates[1] = lat
        await event.save()

        res.json(`I retrieved latidude: ${event.geo.coordinates[0]} and longitude: ${event.geo.coordinates[1]}`)
        //function to find the nearest event in db of the
        // opposite event and service type

    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

// Function to generate random number 
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}



export default {
    create,
    eventByID,
    read,
    list,
    remove,
    update,
    match
}