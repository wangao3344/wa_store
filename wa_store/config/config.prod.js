/**
 * logs日志目录的配置
 * @type {module:path}
 */
const path = require('path');
module.exports = (appInfo) => {
    return {
        logger: {
            dir: path.join(appInfo.baseDir, 'logs'),
        },
    };

};
