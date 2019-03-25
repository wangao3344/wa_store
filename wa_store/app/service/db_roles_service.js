'use strict';

/**
 * db_users_service
 * autoCreate Template by LiWei
 */

const Service = require('egg').Service;

class DbRolesService extends Service {

    /**
     * create a new db_modle
     * author:wangao
     */
    async create(entity) {
        const flag = this.ctx.helper.isObject(entity);
        if (flag) {
            try {
                const result = await this.ctx.model.Roles.create(entity);
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
            const result = await this.ctx.model.Roles.findOne({
                where: {
                    id:Id,
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
        const {isObject, toStringType} = this.ctx.helper;
        if (isObject(entity)) {
            try {
                const newEntity = await this.ctx.model.Roles.update(entity, {
                    where: {
                        id: toStringType(entity.id),
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
                    let result = await this.ctx.service.DbRolesService.findById(entity.id);
                    if (result) {
                        await this.ctx.model.Roles.destroy({
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


}

module.exports = DbRolesService;

