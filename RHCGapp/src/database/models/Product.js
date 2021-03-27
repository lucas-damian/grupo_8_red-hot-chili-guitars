module.exports = (sequelize, dataTypes)=>{

    const alias = "Products"

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
        description : {
            type : dataTypes.STRING,
            allowNull : true
        },
        kit : {
            type : dataTypes.STRING,
            allowNull : true
        },
        id_category : {
            type : dataTypes.INTEGER
        },
        id_product : {
            type : dataTypes.STRING
        }
    }

    const config = {
        tableName : 'products',
        timestamps : false
    }


    const Product = sequelize.define(alias, cols, config)

    Product.associate = function (models){
        
        Product.belongsTo(models.Categories, {
            as : "categorias",
            foreignKey : "id_category"
        })

        Product.hasMany(models.Images, {
            as: 'imagenes',
            foreignKey: 'id_product'
        });
    }

    return Product

}