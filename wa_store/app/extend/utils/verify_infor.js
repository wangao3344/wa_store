'use strict';

/**
 * 包含一系列字符串函数操作方法
 */

const verifyInfor = {

  /**
     * 判断字符串是否一个电话号码
     * @param {String} v
     * @return {Bool}
     */
  isTel(v) {
    return /^\d{3}-\d{8}$|^\d{4}-\d{7}$|^\d{11}$/.test(v);
  },

  /**
     * 判断字符串是否一个Email地址
     * @param {String} v
     * @return {Bool}
     */
  isEmail(v) {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(v);
  },

  /**
     * 判断字符串是否符合 登录密码 格式要求
     * @param {String} v
     */
  loginPwdIsValid(v) {
    return /^(\w){6,20}$/.test(v);
  },

  /**
     * 判断字符串是否符合 提现密码 格式要求
     * @param {String} v
     */
  payPwdIsValid(v) {
    return /^\d{6}$/.test(v);
  },

};

module.exports = verifyInfor;
