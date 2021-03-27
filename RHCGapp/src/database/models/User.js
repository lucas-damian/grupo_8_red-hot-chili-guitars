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
        },
        address : {
            type : dataTypes.STRING(100),
        },
        rol : {
            type : dataTypes.STRING(100),
            defaultValue: 'user'
        }
    }

    const config = {
        tableName : 'users',
        timestamps : false
    }

    
    const User = sequelize.define(alias, cols, config)

   


    return User

}   