module.exports = (sequelize, dataTypes)=>{

    const alias = "Cart"

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        id_product : {
            type : dataTypes.INTEGER,
        },
        id_user : {
            type : dataTypes.INTEGER
        },
        amount : {
            type : dataTypes.INTEGER,
            allowNull : false
        }
    }

    const config = {
        tableName : 'cart',
        timestamps : false
    }

    const cart = sequelize.define(alias, cols, config)

    cart.associate = function (models){
        cart.belongsTo(models.Users, {
            as : "user",
            foreignKey : "id_user"
        })
        cart.belongsTo(models, Product, {
            as : "product",
            foreignKey: "id_product"
        })
    }


    return cart
}