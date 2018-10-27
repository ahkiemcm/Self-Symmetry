const express = require('express')
const router = express.Router()
const applicationController = require('../CONTROLLERS/application')
const userController = require('../CONTROLLERS/user')

//homepage
router.get('/', applicationController.index)

router.get('/user/new', userController.new)
router.get('/user/:id', userController.show)
router.post('/user', userController.create)
router.get('/:id/edit', userController.edit)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

router.get('/user/new', fitnessController.new)
router.get('/user/:id', fitnessController.show)
router.post('/user', fitnessController.create)
router.get('/:id/edit', fitnessController.edit)
router.put('/:id', fitnessController.update)
router.delete('/:id', fitnessController.delete)

router.get('/user/new', nutritionController.new)
router.get('/user/:id', nutritionController.show)
router.post('/user', nutritionController.create)
router.get('/:id/edit', nutritionController.edit)
router.put('/:id', usernutritionController.update)
router.delete('/:id', nutritionController.delete)


module.exports = router