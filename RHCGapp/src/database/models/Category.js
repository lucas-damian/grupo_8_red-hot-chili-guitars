

module.exports = (sequelize, dataTypes)=>{

    const alias = "Categories"

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        }
    }

    const config = {
        tableName : 'categories',
        timestamps : false
    }



    const Category = sequelize.define(alias, cols, config)

    Category.associate = function(models){
        
        Category.hasMany(models.Products,{
            
            as:"productos",
            foreignKey:"id_category"
        });
    }

    return Category
}