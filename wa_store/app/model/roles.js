module.exports = app => {
  const DataTypes = app.Sequelize;
  const date = new Date();
  const Roles= app.model.define('roles', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(36),
      allowNull: false,
      comment: '角色名称'
    },
    description:{
      type:DataTypes.STRING,
      allowNull:false,
      comment:'角色描述'
    },
    created_at: {
      type: DataTypes.DATE,
      default: date,
      comment: '创建时间'
    },
    updated_at: {
      type: DataTypes.DATE,
      default: date,
      comment: '更新时间'
    },



  },{

    freezeTableName: true, // Model 对应的表名将与model名相同
    timestamps: false,//自动维护时间戳


  });
  //创建表之间的关系
  Roles.associate = function() {
    // associations can be defined here
       //一对一
    //app.model.Users.hasOne(app.model.Roles, { as: 'roles' });
    app.model.Roles.hasMany(app.model.Users,{as:'users',foreignKey: 'role_id'});
  };

  return Roles;

};
