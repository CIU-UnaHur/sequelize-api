const Producto = require('../models/producto.model')
const controller = {}

const getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
controller.getAllProductos = getAllProductos

const getProductoById = async (req, res) => {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
}
controller.getProductoById = getProductoById

const createProducto = async (req, res) => {
    const {nombre, precio} = req.body
    const producto = await Producto.create({
        nombre,
        precio
    })
    res.json(producto)
}
controller.createProducto = createProducto

module.exports = controller


