'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        this.ctx.session.userinfor = {
            name: 'wang ao',
            age: '19'
        };
        this.ctx.body = {
            success: true,
            message: '登录成功',
            code: 200
        };
    }

    //登录成功
    async index() {
        if (this.ctx.session.userinfor) {
            this.ctx.body = this.ctx.session.userinfor;
        } else {
            this.ctx.body = {
                message: '此用户不存在'
            }
        }

    }

    //短信验证
    async sendCode() {
        const {ctx} = this;
        let mobile =ctx.query.mobile;
        console.log(mobile);
        let {responseTemplate, verifyInfor, random} = this.ctx.helper;
        let result = responseTemplate();
        if (!mobile) {
            result.message = "用户手机号不能为空";
            result.code = 30007;
            ctx.body = result
        } else {
            let flag = verifyInfor.isTel(mobile);
            if (flag) {
                //获取手机号发送验证码
                let code = random.randomInt(6);
                console.log(code);
                this.ctx.session.msg_code = code;
                await this.service.msgVerifyService.send(mobile, code);
                //验证码通过后在完成注册
                result.message = '信息已发送请查收';
                result.code = 200;
                result.success = true;
                ctx.body = result;


            } else {
                result.message = '请输入正确的手机号';
                result.code = 30008;
                ctx.body = result;
            }

        }


    }
}

module.exports = UserController;
