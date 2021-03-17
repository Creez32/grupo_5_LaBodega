module.exports= (sequelize,dataTypes) =>{
  let alias = "Users"
  
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
    apellido:{
        type: dataTypes.STRING(45),
        allowNull: false
    },
    direccion:{
        type: dataTypes.STRING(150),
        allowNull: false
    },
    email:{
        type: dataTypes.STRING(45),
        allowNull: false
    },
    password:{
        type: dataTypes.STRING(45),
        allowNull: false
    },
    avatar:{
        type: dataTypes.STRING(45),
        allowNull: false
    },
    fecha:{
        type: dataTypes.STRING(45),
        allowNull: false
    },
    created_at:{
        type: dataTypes.DATE,
        allowNull: false
    },
    updated_at:{
        type: dataTypes.DATE,
        allowNull: false
    }
  } 
  
  let  config = {
      tableName : 'users',
      timestamps : true
  }

  const Users = sequelize.define(alias,cols,config)

  Users.associate = function(models){
      Users.belongsToMany(models.Products,{ //Nombre del alias del modelo
          as: 'carrito',
          through : 'carts', //nombre de la tabla en la base de datos
          foreingKey: 'id_usuario',
          otherKey: 'id_producto',
          timestamps: true
      }),
      Users.belongsToMany(models.Products,{ //Nombre del alias del modelo
        as: 'history',
        through : 'purchase_history', //nombre de la tabla en la base de datos
        foreingKey: 'id_usuario',
        otherKey: 'id_producto',
        timestamps: true
    })
  }

  return Users;
}