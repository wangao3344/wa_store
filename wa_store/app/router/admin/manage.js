module.exports = app => {
  const { router, controller } = app;
  router.get('/admin', controller.admin.manage.index);
  router.post('/admin/regist',controller.admin.manage.regist);
};
