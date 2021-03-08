

module.exports = (sequelize, dataTypes)=>{

    const alias = "Category"

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

    return Category
}