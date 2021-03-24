module.exports = (sequelize, dataTypes)=>{
    let alias = 'Images'

    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        id_product:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
    }
    
    let  config = {
        tableName:'images',
        timestamps:false
    }

    const Image = sequelize.define(alias, cols, config);

    Image.associate = models => {
        Image.hasOne(models.Products, {
            as:'imagenes',
            foreignKey:'id_product'
        })        
    }

    return Image;
}