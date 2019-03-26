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
                if (ctx.request.url.indexOf('/admin') !== -1 || ctx.request.url.indexOf('/api') !== -1) {
                    return true;
                }
                return false;
            },
        },
        domainWhiteList: ['http://192.168.8.100:8080'],
    };
    // 允许跨域的请求方式
    config.cors = {
        origin: "*",//允许所有跨域访问如果不配置白名单远程为*也不生效  http://192.168.8.100:8080
        allowMethods: 'GET,HEAD,PUT,POST,DELETE',
        credentials: true //专门为 cookie 跨域配置的
    };
    //配置session
    config.session = {
        key: 'wa_store',
        maxAge: 1000 * 3600 * 24,
        //设置键值对是否可以被 js 访问，默认为 true，不允许被 js 访问
        httpOnly: true,
        //设置是否对 Cookie 进行签名，如果设置为 true，则设置键值对的时候会同时对这个键值对的值进行签名  //，后面取的时候做校验，可以防止前端对这个值进行篡改。默认为 true。
        signed: true,
        //设置是否对 Cookie 进行加密，如果设置为 true，则在发送 Cookie 前会对这个键值对的值进行加密，客户端无法读取到 Cookie 的明文值。默认为 false。
        encrypt: true,
        //每次访问都会刷新session的有效期
        renew: true,
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
