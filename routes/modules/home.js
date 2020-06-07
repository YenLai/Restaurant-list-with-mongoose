const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')
const User = require('../../models/user')



router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

module.exports = router