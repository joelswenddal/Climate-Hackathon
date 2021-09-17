
import express from 'express'
import eventCtrl from '../controllers/event.controller'
//import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/event/exchange')
    .get(eventCtrl.list)
    .post(eventCtrl.create)

router.route('/event/:eventId')
    .get(eventCtrl.read)
    .put(eventCtrl.update)
    .delete(eventCtrl.remove)

router.param('userId', eventCtrl.eventByID)

export default router