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
            allowNull : false
        },
        id_user : {
            type : dataTypes.INTEGER,
            allowNull : false
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

    const Cart = sequelize.define(alias, cols, config)

    
  /*   Cart.associate = function (models){
        Cart.belongsTo(models.User, {
            as : "user",
            foreignKey : "id_user"
        })
        
        Cart.hasMany(models.Product, {
            as : "product",
            foreignKey: "id_product"
        })
    } */

    return Cart
}