module.exports= (sequelize,DataTypes) =>{
    let alias = History
    
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
        },
        date:{
            type: dataTypes.DATETIME,
            allowNull: false,
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    } 
    
    
    let  config = {
        tableName : 'history',
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