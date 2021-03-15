module.exports= (sequelize,DataTypes) =>{
    let alias = Carts
    
    const cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_usuario:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        id_producto:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: 1
        },
        precio:{
            
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