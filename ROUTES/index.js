const express = require('express')
const router = express.Router()
const applicationController = require('../CONTROLLERS/application')
const userController = require('../CONTROLLERS/user')
const fitnessController = require('../CONTROLLERS/fitness')
const nutritionController = require('../CONTROLLERS/nutrition')

//homepage
router.get('/', applicationController.index)

router.get('/user/new', userController.new)
router.get('/user/:id', userController.show)
router.post('/user', userController.create)
router.get('/:id/edit', userController.edit)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

router.get('/fitness/new', fitnessController.new)
router.get('/fitness/:id', fitnessController.show)
router.post('/fitness', fitnessController.create)
router.get('/:id/edit', fitnessController.edit)
router.put('/:id', fitnessController.update)
router.delete('/:id', fitnessController.delete)

router.get('/nutrition/new', nutritionController.new)
router.get('/nutrition/:id', nutritionController.show)
router.post('/nutrition', nutritionController.create)
router.get('/:id/edit', nutritionController.edit)
router.put('/:id', nutritionController.update)
router.delete('/:id', nutritionController.delete)


module.exports = router