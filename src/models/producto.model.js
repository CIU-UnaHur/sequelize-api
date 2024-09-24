const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../config/database')

class Producto extends Model {}

Producto.init({
    nombre: {
        type : DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Producto'
})

module.exports = Producto
