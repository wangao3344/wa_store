'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 后台管理系统
  require('./router/admin/manage')(app);
  // 移动端接口
  require('./router/default/api')(app);

};
