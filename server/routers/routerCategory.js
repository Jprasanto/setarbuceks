const express = require('express')
const router = express.Router()
const ControllerCategory = require('../controllers/controllerCategory')

router.get('/', ControllerCategory.categoryList)
router.post('/add', ControllerCategory.addCategory)
router.delete('/:id', ControllerCategory.deleteCategory)


module.exports = router