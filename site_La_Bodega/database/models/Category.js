module.exports= (sequelize,DataTypes) =>{
    let alias = Category
    
    const cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Variedad: {
            type: dataTypes.STRING(45),
            allowNull: false,
            defaultValue: 1
        }
    } 
    
    let  config = {
        tableName : 'category',
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