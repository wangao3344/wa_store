module.exports = app => {
  const { router, controller } = app;
  router.get('/api/index', controller.default.user.index);
  router.get('/api/login', controller.default.user.login);
  router.get('/api/code',controller.default.user.sendCode);
};
