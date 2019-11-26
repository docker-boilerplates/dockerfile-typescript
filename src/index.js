const path = require("path");

require('dotenv').config({ path: path.resolve(process.cwd(), '../.env') })

const express = require('express')
const app = express()
const port = process.env.PORT

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))