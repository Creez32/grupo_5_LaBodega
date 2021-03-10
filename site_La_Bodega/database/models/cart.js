module.exports= (sequelize,DataTypes) =>{
    let alias = Carts
    
    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        usuario_id:{
            type: dataTypes.INTEGER(11),
        },
        producto_id:{
            type: dataTypes.INTEGER(11),
        },

    }

    let config = {
        tableName : "carts",
        timestamps : false
    }

    const Cart
}