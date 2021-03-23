module.exports = (sequelize, dataTypes)=>{

    const alias = "Product"

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        instrument : {
            type : dataTypes.STRING,
            allowNull : false
        },
        type : {
            type : dataTypes.STRING,
            allowNull : true
        },
        mark : {
            type : dataTypes.STRING,
            allowNull : true
        },
        model : {
            type : dataTypes.STRING,
            allowNull : true
        },
        color : {
            type : dataTypes.STRING,
            allowNull : true
        },
        price : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        img : {
            type : dataTypes.STRING,
            allowNull : true
        },
        description : {
            type : dataTypes.STRING,
            allowNull : true
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

    Product.associate = function (models){
        
        Product.belongsTo(models.Category, {
            as : "categorias",
            foreignKey : "id_category"
        })
    }

    return Product

} 