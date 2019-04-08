let UserModal = require('../models/user_model')
let express = require('express')
let router = express.Router()

// CRUD C:create/post R:read/get U:update/delete D:delete/delete
// Create a new customer
// POST localhose:5000/user
router.post('/user', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  // It will take req.body, validate through UserModal and save it to the db
  let model = new UserModal(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }

      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

// GET all users
router.get('/user', (req, res) => {
  UserModal.find((err, users) => {
    if (err) res.send(err);
    res.json(users);
  });
})


// GET request
router.get('/user', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL query: email')
  }
  UserModal.findOneAndUpdate({
    email: req.query.email
  }, req.body, {
    new: true
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})


// UPDATE request
router.put('/user', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL query: email')
  }
  UserModal.findOneAndUpdate({
    email: req.query.email
  }, req.body, {
    new: true
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// UPDATE request
router.delete('/user', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL query: email')
  }
  UserModal.findOneAndRemove({
    email: req.query.email
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router