const express = require('express')
const router = express.Router()
const ControllerUser = require('../controllers/controllerUser')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get("/", (req, res) => {
    res.status(200).json({
        message: "BERHASIL DEPLOY BOSS :))))",
    });
});

router.post('/login', ControllerUser.login)
router.use(authentication)
router.post('/adm-register', authorization, ControllerUser.register)

module.exports = router