'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    //数据库插件
    sequelize : {
        enable: true,
        package: 'egg-sequelize',
    },
    // 安装egg-cors
    cors: {
        enable: true,
        package: 'egg-cors',
    },
};
