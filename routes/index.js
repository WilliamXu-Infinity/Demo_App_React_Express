var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('You have a requested a home page')
})

// QueryString => query property on the request object
// localhost:5000?name=abc&age=20
router.get('/person', (req, res) => {
  if(req.query.name) {
    res.send(`You have requested a person name ${req.query.name}`)
  } else {
    res.send('You have requested a person')
  }
})

// Params property on the request object
// localhost:5000/person/myName
router.get('/person/:name', (req, res) => {
  res.send(`You have requested a person name ${req.params.name}`)
})

router.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'William'}
  ]
  res.json(customers)
})


module.exports = router;
