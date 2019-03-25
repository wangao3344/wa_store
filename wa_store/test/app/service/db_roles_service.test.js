let {app,assert} = require('egg-mock/bootstrap');
let uuid = require('uuid/v4');

describe('test/app/service/db_roles_service.test.js', () => {
    let ctx;
    before(() => {
        ctx = app.mockContext();
    });
    //ok
    // it('create/service/db_roles_service/create', async () => {
    //
    //     let result = await ctx.service.dbRolesService.create(
    //         {
    //             id: uuid(),
    //             role_name:'UI设计',
    //             description:'负责界面美观的设计',
    //         }
    //     );
    //     assert(result);
    //});
  }
);
