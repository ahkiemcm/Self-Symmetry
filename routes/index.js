const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const userController = require('../controllers/user')
const fitnessController = require('../controllers/fitness')
const nutritionController = require('../controllers/nutrition')

//homepage
router.get('/', applicationController.index)


router.get('/user/index', userController.index)
router.get('/user/new', userController.new)
router.get('/user/:id', userController.show)
router.post('/user', userController.create)
router.get('/:id/edit', userController.edit)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

router.get('/user/fitness/new', fitnessController.new)
router.get('user/:id/fitness', fitnessController.show)
router.post('user/fitness', fitnessController.create)
router.get('user/:id/fitness/edit', fitnessController.edit)
router.put('user/:id', fitnessController.update)
router.delete('/:id', fitnessController.delete)

router.get('/nutrition/new', nutritionController.new)
router.get('/nutrition/:id', nutritionController.show)
router.post('/nutrition', nutritionController.create)
router.get('user/:id/edit', nutritionController.edit)
router.put('/:id', nutritionController.update)
router.delete('/:id', nutritionController.delete)


module.exports = router