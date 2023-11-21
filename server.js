const express = require('express')
const mongoose = require('mongoose')
const trainings = require('./routes/trainings')

require('dotenv').config() // A .env fájlt olvassa
const app = express()

const mongoString = process.env.CONNECTION_STRING

mongoose.set('strictQuery', true)
mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error)=>{
    console.log(error)
})

database.once('connected', ()=>{
    console.log('DB connected')
})

app.use(express.json())

const morgan = require('morgan')

app.use(morgan('dev'))

app.use('/api/trainings', trainings)


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));