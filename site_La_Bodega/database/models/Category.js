module.exports= (sequelize,DataTypes) =>{
    let alias = Category
    
    const cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usuario_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        producto_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 1
        }
    } 
    
    let  config = {
        tableName : 'carts',
        timestamps : false,
    }

    const Category = sequelize.define(alias,cols,config)

    Category.associate = function(models){
        Category.hasMany(models.Productos,{
            as: 'category',
            foreingKey : 'id_category'
        })
    }

    return Category;
}