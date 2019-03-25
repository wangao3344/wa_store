let {app,assert} = require('egg-mock/bootstrap');
let uuid = require('uuid/v4');

describe('test/app/service/db_users_service.test.js', () => {
        let ctx;
        before(() => {
            ctx = app.mockContext();
        });
        //ok
        it(' /service/db_users_service/getMobileIsExist', async () => {
            let mobile ='18545570003';
            let result = await ctx.service.dbUsersService.getMobileIsExist(mobile);
            console.log(result);
            assert(result);
        });
        //测试用户的首页展示
    it(' /service/db_users_service/showUsesList', async () => {
        let result = await ctx.service.dbUsersService.showUsersList();
        console.log(result);
        assert(result);
    });
       //测试用户条数的获取
    it(' /service/db_users_service/getUsersTotalCounts', async () => {
        let result = await ctx.service.dbUsersService.getUsersTotalCounts();
        console.log(result);
        assert(result);
    });
    }
);
