module.exports= (sequelize,DataTypes) =>{
    let alias = History
    
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

    const History = sequelize.define(alias,cols,config)

    History.associate = function(models){
        History.belongsTo(models.Users,{
            as: 'users',
            foreingKey : 'id_usuario'
        }),
        History.belongsTo(models.Products,{
            as: 'products',
            foreingKey : 'id_producto'
        })
    }

    return History;
}