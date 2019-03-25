/**
 * 全局中间件
 * @param options
 * @param app
 * @return {Function}
 */
module.exports = (options, app) => {
  return async (ctx, next) => {
    try {
      const { request: { headers } } = ctx;
      //console.log(headers);
      // 校验token TODO
      await next();
    } catch (e) {
      if (app.config.dev) {
        ctx.body = 'Server internal error';
      }

    }
  };
};
