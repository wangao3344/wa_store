// 判断数据类型
let { isNumber, isObject, isStringType } = require('./utils/data_type');
//加密的工具包
let encryptUtil = require('./utils/encryptUtil');
// 用户信息数据校验
let verifyInfor = require('./utils/verify_infor');
// 响应格式的定义
let responseTemplate = require('./enums/response_template');
//第三放插件
let uuid = require('uuid/v4');
// 获取id
function getId() {
  return uuid();
}
module.exports = {
  isNumber,
  isObject,
  isStringType,
  verifyInfor,
  responseTemplate,
  getId,
  encryptUtil,
};
