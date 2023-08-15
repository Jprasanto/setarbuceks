const express = require('express')
const router = express.Router()
const routerCategory = require('./routerCategory')
const routerItem = require('./routerItem')
const routerUser = require('./routerUser')
const routerPublic = require('./routerPublic')
const authentication = require('../middlewares/authentication')

router.use(routerPublic)
router.use(routerUser)
router.use(authentication)
router.use('/items', routerItem)
router.use('/categories', routerCategory)


module.exports = router