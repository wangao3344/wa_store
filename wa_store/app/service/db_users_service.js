'use strict';

/**
 * db_users_service
 * autoCreate Template by LiWei
 */

const Service = require('egg').Service;

class DbUsersService extends Service {
    /**
     * 获取数据库的总条数
     */
    async getUsersTotalCounts(){
        let totalCount=await this.ctx.model.Users.count();
        return totalCount;
    }

    /**
     * 分页的实现
     * @param page
     * @param limit
     * @returns 用户信息
     */
    async showUsersByPage(page, limit) {
        const options = {
            //关联查询时就已经显示roles数据了
            include: {model: this.ctx.model.Roles, as: 'roles'},
            offset: (page - 1) * limit,
            limit: limit,
            attributes: ['username', 'email', 'mobile'],
            order: [['created_at', 'desc']],
        };
        let users = await this.ctx.model.Users.findAndCountAll(options);
        return users;
    }

    /**
     * 用户管理系统的界面展示
     */
    async showUsersList() {

        let usersList = await this.ctx.model.Users.findAll(
            {
                attributes: ['username', 'email', 'mobile'],
                include: {model: this.ctx.model.Roles, as: 'roles'},

            }
        );

        return usersList;
    }


    async create(entity) {
        const flag = this.ctx.helper.isObject(entity);
        if (flag) {
            try {
                const result = await this.ctx.model.Users.create(entity);
                return result;
            } catch (error) {
                throw error;
            }
        }
    }

    /**
     * get a jy_cny_bill_deposit entity by Id
     * @param {String} Id guid
     * @return {Object} entity a model Entity
     */
    async findById(Id) {
        const id = this.ctx.helper.isStringType(Id);
        try {
            const result = await this.ctx.model.Users.findOne({
                where: {
                    id,
                },
            });
            return result
        } catch (error) {
            throw error;
        }
    }

    /**
     * update a jy_cny_bill_deposit
     * @param {Object} entity model jy_cny_bill_deposit
     * @return {Object} newEntity entity a model Entity
     */
    async edit(entity) {
        const {isObject, isStringType} = this.ctx.helper;
        if (isObject(entity)) {
            try {
                const newEntity = await this.ctx.model.Users.update(entity, {
                    where: {
                        id: isStringType(entity.id),
                    },
                });
                return newEntity;
            } catch (e) {
                throw e;
            }
        }

    }

    /**
     * remove a record from user
     * @param {Object} entity a model Entity
     * @return {Object} affact count
     */
    async remove(entity) {
        const flag = this.ctx.helper.isObject(entity);
        if (flag) {
            try {
                let flag = this.ctx.helper.isStringType(entity.id);
                if (flag) {
                    let result = await this.ctx.service.dbUsersService.findById(entity.id);
                    if (result) {
                        await this.ctx.model.Users.destroy({
                            where: {
                                id: entity.id
                            }
                        });
                    }
                }

            } catch (error) {
                throw error;
            }
        }

    }

    /**
     * 检查用户手机号码是否存在
     * @param {String} mobile 用户手机号
     * @return {Boolean}
     */
    async getMobileIsExist(mobile) {
        let flag = this.ctx.helper.isStringType(mobile);
        console.log(flag);
        let isExist = false;
        try {
            const user = await this.ctx.model.Users.findOne({
                where: {
                    mobile: mobile.toString()
                }
            });
            console.log(user);
            if (user) {
                isExist = true;
            }
            return isExist;
        } catch (error) {
            //this.ctx.logger.error(`查询手机号是否存在出错: ${error}  mobile:${mobile}`);
            console.log(error);
        }

    }

}

module.exports = DbUsersService;

