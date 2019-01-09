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
router.get('user/:id/fitness/', fitnessController.index)
router.get('/user/:id/fitness/new', fitnessController.new)
router.post('user/:id/fitness', fitnessController.create)
router.get('user/:id/fitness/edit', fitnessController.edit)
router.put('user/:id', fitnessController.update)
router.delete('/:id', fitnessController.delete)

// //Nutrition Log

// router.get('/nutrition/new', nutritionController.new)
// router.get('/nutrition/:id', nutritionController.show)
// router.post('/nutrition', nutritionController.create)
// router.get('user/:id/edit', nutritionController.edit)
// router.put('/:id', nutritionController.update)
// router.delete('/:id', nutritionController.delete)


module.exports = router