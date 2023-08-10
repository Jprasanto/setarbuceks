const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models')

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) throw { name: "Please login first" }

        const payload = verifyToken(access_token);
        if (!payload) throw { name: "Please login first" }

        const result = await User.findByPk(payload.id);
        if (!result) throw { name: "Error invalid username or email or password" }
        req.user = {
            id: result.id,
            email: result.email,
            role: result.role
        }
        next();
    } catch (err) {
        next(err)
    }

};

module.exports = authentication;