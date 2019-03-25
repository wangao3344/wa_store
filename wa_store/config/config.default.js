/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552382921987_4323';

  // add your middleware config here
  config.middleware = ['global', 'jsonp'];
  //数据库的配置
  config.sequelize = {
    dialect: 'mysql',
    host: '39.96.187.209',
    port: 3306,
    database: 'net_store',
    username: 'wangao',
    password: 'wa5069369',
    timezone: '+08:00' // 保存为本地时区
  };
  // 禁用csrf验证，并配置可以跨域的白名单
  config.security = {
    csrf: {
      //enable: false,很不友好
      ignore: ctx => {
        if (ctx.request.url.indexOf('/admin')!==-1||ctx.request.url.indexOf('/api')!==-1) {
          return true;
        }
        return false;
      },
    },
    domainWhiteList: ['http://192.168.8.100:8080'],
  };
  // 允许跨域的请求方式
  config.cors = {
    origin:"*",//允许所有跨域访问如果不配置白名单远程为*也不生效  http://192.168.8.100:8080
    allowMethods: 'GET,HEAD,PUT,POST,DELETE',
    credentials: true //专门为 cookie 跨域配置的
  };
  config.isProd = false;
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
