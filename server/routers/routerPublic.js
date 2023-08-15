const express = require('express')
const router = express.Router()
const ControllerItem = require('../controllers/controllerItem')
const ControllerCategory = require('../controllers/controllerCategory')

router.get('/menu', ControllerItem.listMenu)
router.get('/menu/:id', ControllerItem.detailMenu)
router.get('/pub/category/:id', ControllerCategory.getCategory)

module.exports = router