require('dotenv').config()

const path = require('path')
// specify a folder for static assets, like images, css, index.html, js...
// we need an endpoint on '/' to send index.html

const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')))

const PORT = process.env.PORT || 9000

// endpoints that server JSON
app.get('/api', (req, res) => {
  res.json({ message: 'The api is UP' })
})

// fallback endpoint that will just send back index.html with the CRA
app.get("*", (req, res) => {
    // to send index.html from client/build:
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})