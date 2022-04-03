const PORT = 4004

const express = require('express')
const cors = require('cors')
const app = express()
const { getHouse, deleteHouse, createHouse, updateHouse } = require('./controllers/movie.controllers')

app.use(cors())
app.use(express.json())

app.get(`/api/houses`, getHouse)
app.delete(`/api/houses/:id`, deleteHouse)
app.post(`/api/houses`, createHouse)
app.put(`/api/houses/:id`, updateHouse)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))