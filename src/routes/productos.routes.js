const { Router } = require('express')
const controller = require('../controllers/productos.controllers')

const routes = Router()

routes.get('/productos', controller.getAllProductos)

routes.get('/productos/:id', controller.getProductoById)

routes.post('/productos', controller.createProducto)

module.exports = routes