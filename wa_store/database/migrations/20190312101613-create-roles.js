'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const{STRING,DATE}=Sequelize;
    let date= new Date();
    return queryInterface.createTable('roles', {
      id: {type: STRING(36), primaryKey: true, allowNull:false,comment: '角色id'},
      role_name: {type: STRING(36), allowNull: false, comment: '角色名称'},
      description:{type:STRING,allowNull:false,comment:'角色描述'},
      created_at: {type: DATE, default: date, comment: '创建时间'},
      updated_at: {type: DATE, default: date, comment: '更新时间'},
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('roles');
  }
};
