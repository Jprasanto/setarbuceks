const { verifyPassword } = require('../helpers/bcryptj')
const { generateToken } = require('../helpers/jwt')
const { User } = require('../models/index')

class Controller {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({ where: { email } })
            if (!user) {
                throw { name: "Error invalid username or email or password" }
            }
            if (!verifyPassword(password, user.password)) throw { name: "Error invalid username or email or password" }

            const token = generateToken({
                id: user.id,
                email: user.email
            })
            res.status(200).json({
                access_token: token,
                email: user.email,
                role: user.role
            })
        } catch (err) {
            next(err)
        }
    }
    static async register(req, res, next) {
        try {
            const { username, email, password, phoneNumber, address } = req.body
            const register = await User.create({ username, email, password, phoneNumber, address, role: "admin" })
            res.status(201).json({
                message: "admin created"
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller