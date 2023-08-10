const express = require('express')
const router = express.Router()
const ControllerItem = require('../controllers/controllerItem')
const authorization = require('../middlewares/authorization')

router.get('/', ControllerItem.listMenu)
router.post('/', ControllerItem.addMenu)
router.get('/:id', ControllerItem.detailMenu)
router.put('/:id', ControllerItem.updateMenu)
router.delete('/:id', ControllerItem.deleteMenu)

module.exports = router