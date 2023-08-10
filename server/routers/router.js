const express = require('express')
const router = express.Router()
const routerCategory = require('./routerCategory')
const routerItem = require('./routerItem')
const routerUser = require('./routerUser')
const authentication = require('../middlewares/authentication')


router.use(routerUser)
router.use(authentication)
router.use('/items', routerItem)
router.use('/categories', routerCategory)


module.exports = router