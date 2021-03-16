module.exports= (sequelize,DataTypes) =>{
    let alias = Carts
    
    const cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_usuario:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        id_producto:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        precio:{
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    } 
    
    let  config = {
        tableName : 'carts',
        timestamps : false,
    }

    const Cart = sequelize.define(alias,cols,config)

    Cart.associate = function(models){
        Cart.belongsTo(models.Users,{
            as: 'users',
            foreingKey : 'id_usuario'
        }),
        Cart.belongsTo(models.Products,{
            as: 'products',
            foreingKey : 'id_producto'
        })
        
    }
    

    return Cart;
}