import express from 'express'
import { helloWorld } from './routes'

const app = express()

app.get('/', (request, response) => {
    return response.json({message: 'Show'})
})

app.listen(3333)