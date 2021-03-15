module.exports= (sequelize,DataTypes) =>{
  let alias = Users
  
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
      tableName : 'Users',
      timestamps : true
  }

  const Users = sequelize.define(alias,cols,config)

  User.associate = function(models){
      User.belongsToMany(models.Products,{ //Nombre del alias del modelo
          as: 'carrito',
          through : 'carts', //nombre de la tabla en la base de datos
          foreingKey: 'id_usuario',
          otherKey: 'id_producto',
          timestamps: true
      }),
      User.belongsToMany(models.Products,{ //Nombre del alias del modelo
        as: 'history',
        through : 'purchase_history', //nombre de la tabla en la base de datos
        foreingKey: 'id_usuario',
        otherKey: 'id_producto',
        timestamps: true
    })
  }

  return Users;
}