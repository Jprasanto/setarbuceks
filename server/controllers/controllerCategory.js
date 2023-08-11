const { Category } = require('../models/index')

class Controller {
    static async categoryList(req, res, next) {
        try {
            const categories = await Category.findAll()
            res.status(200).json({
                categories
            })
        } catch (err) {
            next(err)
        }
    }
    static async addCategory(req, res, next) {
        try {
            const { name } = req.body
            await Category.create({ name })
            res.status(201).json({
                message: `Category ${name} has been added`
            })
        } catch (err) {
            next(err)
        }
    }
    static async deleteCategory(req, res, next) {
        try {
            const { id } = req.params
            await Category.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({
                message: `Success delete Category with id ${id}`
            })
        } catch (err) {
            next(err)
        }
    }
    static async updateCategory(req, res, next) {
        try {
            const { name } = req.body
            const { id } = req.params
            const category = await Category.findByPk(id)
            if (!category) throw { name: "error not found" }

            await Category.update({ name }, {
                where: {
                    id
                }
            })
            res.status(200).json({
                category
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller