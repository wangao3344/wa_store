'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    const{STRING,DATE}=Sequelize;
    let date= new Date();
    return queryInterface.createTable('users', {
      id: {type: STRING(36), allowNull: false, primaryKey: true},
      role_id: {
        type: STRING(36),
        allowNull: false,
      },
      username: {type: STRING(36), allowNull: false, comment: '用户名'},

      password: {type: STRING(36), allowNull: true, comment: '密码'},

      mobile: {type: STRING(11), allowNull: true, comment: '手机号'},

      email: {type: STRING(36), default: null, comment: '邮箱'},

      created_at: {type: DATE, default: date, comment: '创建时间'},

      updated_at: {type: DATE, default: date, comment: '更新时间'},
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
