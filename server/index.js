const express = require('express');
const app = express()
const massive = require('massive')
const controller = require('./controller')

require('dotenv').config()
const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    
    app.listen(SERVER_PORT, () => console.log(`Return of the PORT ${SERVER_PORT}`))
}).catch(err => console.log(err, 'Unable to connect to database'))

app.use(express.json())

app.get('/api/inventory', controller.getAllProducts)
app.get('/api/inventory/:id', controller.getOneProduct)

app.put('/api/inventory/:id', controller.updateProducts)

app.post('/api/inventory', controller.createProduct)

app.delete('/api/inventory/:id', controller.deleteProducts)


