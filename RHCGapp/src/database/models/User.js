module.exports = (sequelize, dataTypes)=>{

    const alias = "Users"

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
        },
        first_name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        email : {
            type : dataTypes.STRING(150),
            allowNull : false
        },
        password : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        dni : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        address : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        rol : {
            type : dataTypes.STRING(100),
            allowNull : false,
            defaultValue: 'user'
        }
    }

    const config = {
        tableName : 'users',
        timestamps : false
    }

    
    const User = sequelize.define(alias, cols, config)

  /*   User.associate = function (models){
        
        User.hasOne(models.Cart, {
            as : "carrito",
            foreignKey : "id_category"
        })
    } */


    return User

}   