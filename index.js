import express from 'express'
const app = express()

// middlewares

app.use(express.json()) // to get req.body
app.use(express.static('public')) // to serve static files

// routes

app.get('/', (req, res) => {
  res.send('Home Page')
})

const port = process.env.PORT || 3000

app.listen(3000, () => {
  console.log('Listening on Port 3000')
})
