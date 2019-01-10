const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')
const fitnessController = require('../controllers/fitness')
const nutritionController = require('../controllers/nutrition')

//homepage
router.get('/', applicationController.index)

//User
router.get('/user', userController.index)
router.get('/user/new', userController.new)
router.post('/user', userController.create)
router.get('/user/:id', userController.show)
router.delete('/user/:id', userController.delete)
router.get('/user/:id/edit', userController.edit)
router.put('/user/:id/', userController.update)
router.patch('/:id', userController.update)

//Fitness Log
router.get('/user/:id/fitness', fitnessController.index)
router.post('/user/:id/fitness', fitnessController.create)



// //Nutrition Log

router.get('/user/:id/nutrition', nutritionController.index)
router.post('/user/:id/nutrition', nutritionController.create)




module.exports = router