const express = require('express')
const router = express.Router()
const applicationController = require('../CONTROLLERS/application')

//homepage
router.get('/', applicationController.index)


module.exports = router