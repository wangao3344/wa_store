'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
     this.ctx.session.userinfor={
        name:'wang ao',
        age:'19'
     };
     this.ctx.body={
       success:true,
       message:'登录成功',
       code:200
     };
  }
   //登录成功
   async index(){
    if(this.ctx.session.userinfor){
      this.ctx.body=this.ctx.session.userinfor;
    }else {
      this.ctx.body={
         message: '此用户不存在'
      }
    }

   }
}

module.exports = UserController;
