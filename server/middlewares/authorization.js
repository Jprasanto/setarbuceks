const { Item, User } = require('../models/index')

const authorization = async (req, res, next) => {
    try {
        const { role, email, id: userId } = req.user

        const user = await User.findOne({ where: { email } })
        if (!user) throw { name: "error not found" }
        if (role !== "SuperAdmin") {
            throw { name: "Not Authorized" }
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authorization