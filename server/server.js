import config from './../config/config.js'
import app from './express.js'
import mongoose from 'mongoose'


// port (below) is in config.js right now
//const port = process.env.PORT || 5000; 


// Connection URL
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/exchangesandbox', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: mongodb://localhost:27017/exchangesandbox`)
})

// ${config.mongoUri}

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})