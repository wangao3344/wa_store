/**
 * 判断参数是否为int类型
 * @param str
 * @return {*}
 */
function isNumber(params) {
  if (typeof str === 'number') return true;
  if (!params || typeof params !== 'number' || params.toString().length === 0) {
    throw new Error('params must be number');
  }


}

/**
 *  判断参数是不是一个object类型
 * @param entity
 */
function isObject(entity) {
  if (!entity || typeof entity !== 'object' || Object.keys(entity).length === 0) {
    throw new Error('entity must be Object');
  }
  return true;
}

/**
 * 参数转为string
 * @param params
 */
function isStringType(params) {
  if (!params || typeof params !== 'string' || params.length === 0) throw new Error('Id must be string');
  if (typeof params === 'string') return params;

  return params;
}

module.exports = {
  isNumber,
  isObject,
  isStringType,
};
