module.exports = (sequelize, dataTypes)=>{

    const alias = "Product"

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        intrument : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        type : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        mark : {
            type : dataTypes.STRING(150),
            allowNull : false
        },
        model : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        color : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        price : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        img : {
            type : dataTypes.STRING(600),
            allowNull : false,
        },
        description : {
            type : dataTypes.STRING(1200),
            allowNull : false
        },
        id_category : {
            type : dataTypes.INTEGER
        }
    }

    const config = {
        tableName : 'products',
        timestamps : false
    }


    const Product = sequelize.define(alias, cols, config)

    product.associate = function (models){
        product.belongsTo(models.Category, {
            as : "category",
            foreignKey : "id_category"
        })
    }

    return Product

} 