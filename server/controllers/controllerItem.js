const { Item, Ingredient, User, Category, sequelize } = require('../models/index')
const generateSlug = require('../helpers/slug')

class Controller {
    static async listMenu(req, res, next) {
        try {
            const item = await Item.findAll({
                include: [{
                    model: User,
                    attributes: {
                        exclude: ["password"]
                    }
                }, Category],
            })
            res.status(200).json({
                message: item
            })
        } catch (err) {
            next(err)
        }
    }
    static async addMenu(req, res, next) {
        const trx = await sequelize.transaction();
        try {
            const { name, description, price, stock, imgUrl, categoryId, ingredients = [] } = req.body
            const slug = generateSlug(name)
            const createdMenu = await Item.create({ name, slug, description, price, stock, imgUrl, categoryId, authorId: req.user.id, }, { transaction: trx })

            const payloadIngredient = ingredients.map(el => {
                return {
                    itemId: createdMenu.id,
                    name: el
                }
            });
            await Ingredient.bulkCreate(payloadIngredient, { transaction: trx })

            await trx.commit()

            res.status(201).json({
                createdMenu
            })

        } catch (err) {
            await trx.rollback()
            next(err)
        }
    }
    static async detailMenu(req, res, next) {
        try {
            const { id } = req.params
            const item = await Item.findByPk(id)
            if (!item) throw { name: "error not found" }
            res.status(200).json({
                message: item
            })
        } catch (err) {
            next(err)
        }
    }
    static async updateMenu(req, res, next) {
        try {
            const { name, description, price, imgUrl, categoryId } = req.body
            const { id } = req.params
            const item = await Item.findByPk(id)
            if (!item) throw { name: "error not found" }

            await Item.update({ name, description, price, imgUrl, authorId: req.user.id, categoryId }, {
                where: {
                    id
                }
            })
            res.status(200).json({
                item
            })
        } catch (err) {
            next(err)
        }
    }
    static async deleteMenu(req, res, next) {
        try {
            const { id } = req.params
            await Item.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({
                message: `Success delete Menu with id ${id}`
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller