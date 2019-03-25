'use strict';

const Controller = require('egg').Controller;

class ManagerController extends Controller {
  async index() {
    const { ctx } = this;
    const _result = ctx.helper.responseTemplate;
    const result = _result();
    // let users=await this.service.dbUsersService.showUsersList();
    // users.forEach(user=>{
    //   console.log(user.roles.role_name);
    // });
    //console.log(users);
    //分页的实现
    let page=ctx.query.page ||1;
    let limit=2;
    let users = await this.service.dbUsersService.showUsersByPage(page,limit);
    result.code = 200;
    result.success=true;
    result.message = '角色列表首页';
    result.data= users;
    ctx.body = result;
  }
  async regist(){
    const { ctx, logger } = this;
    const result = ctx.helper.responseTemplate();
    const params = ctx.request.body;
   // console.log(params);
    if (!params.username || params.username.length === 0 ||
        !params.password || params.password.length === 0 ||
        !params.mobile || !params.email ||!params.role_id) {
      result.message = '参数无效';
      result.code = 30001;
      ctx.body = result;

      return;
    }
    let verifyInfor=ctx.helper.verifyInfor;
    // 校验密码
     if(!verifyInfor.loginPwdIsValid(params.password)){
       result.message = '密码不符合要求';
       result.code = 30007;
       ctx.body = result;
       return;
     }

    // 校验手机号
    if (!verifyInfor.isTel(params.mobile)) {
      result.message = '手机号有误';
      result.code = 30002;
      ctx.body = result;
      return;
    }
    // 查询手机号是否注册
    try {
      const checkMobile = await this.service.dbUsersService.getMobileIsExist(params.mobile);
      //console.log(checkMobile);
      if (checkMobile) {
        result.message = '该手机号已被注册';
        result.code = 30003;
        ctx.body = result;
        return;
      }
    } catch (e) {
      logger.error(`内部查询出错:${e} mobie:${params.mobile}`);
      result.code = 30005;
      result.message = '服务器繁忙，请稍后再试！';
      ctx.body = result;
    }

    // 校验邮箱
    if (!verifyInfor.isEmail(params.email)) {
      result.message = '邮箱不正确';
      ctx.body = result;
      result.code = 30004;
      return;
    }
    params.id = ctx.helper.getId();
    //对密码进行加密
    let{encryptUtil}=ctx.helper;
    params.password=encryptUtil.aesEncrypt(params.password,params.id);
    // 注册成功，添加用户
    try {
      const user = await this.service.dbUsersService.create(params);
      if (user) {
        result.message = '注册成功！';
        result.code = 200;
        result.data = { user };
        result.success=true;
        ctx.body = result;
      }
    } catch (e) {
      logger.error(`添加用户信息出错:${e}`);
      result.message = '服务器繁忙请重试';
      result.code = 30006;
      result.success=false;
      ctx.body = result;

    }

  }

}

module.exports = ManagerController;
