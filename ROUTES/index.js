const express = require('express')
const router = express.Router()
const applicationController = require('../CONTROLLERS/application')
const userController = require('../CONTROLLERS/user')

//homepage
router.get('/', applicationController.index)

router.get('/user/new', userController.new)
router.get('/user/:id', userController.show)
router.post('/user', userController.create)


module.exports = router