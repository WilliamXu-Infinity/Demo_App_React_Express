let express = require('express');
let app = express()
let bodyParser = require('body-parser')
let homeRout = require('./routes')
let userRout = require('./routes/users')

// bodyParser: look into incoming request, turn it into req.body
app.use(bodyParser.json())

// Middleware, doing something at beginning
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
  next() // withoud next, it will wait until time out to excute next line of code
})
app.use(homeRout)
app.use(userRout)

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send('404 Error: Page no found')
})

// Handler for 500
app.use((err, req, res, next) => {
  res.status(505).send('505 Error')
})



const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

