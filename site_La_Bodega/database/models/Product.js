module.exports= (sequelize,dataTypes) =>{
    let alias = Products
    
    const cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        priceBox: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        detail:{
            type: dataTypes.STRING(500),
            allowNull: false
        },
        year:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        time:{
            type: dataTypes.STRING(11),
            allowNull: false
        },
        color:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        origin:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        imagen:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        category_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    } 
    
    let  config = {
        tableName : 'products',
        timestamps : false,
    }

    const Products = sequelize.define(alias,cols,config)

    Products.associate = function(models){
        Products.hasMany(models.Category,{
            as: 'category',
            foreingKey : 'id_category',
            timestamps : false
        })
        Products.belongsToMany(models.Users,{
            as: 'cart',
            through: 'carts',
            foreingKey : 'id_producto',
            otherKey: 'id_usuario',
            timestamps : false
        })
        Products.belongsToMany(models.Users,{
            as: 'history',
            through: 'purchase_history',
            foreingKey : 'id_producto',
            otherKey: 'id_usuario',
            timestamps : false
        })
    }

    return Products;
}