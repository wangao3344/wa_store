module.exports = app => {
    const DataTypes = app.Sequelize;
    const date = new Date();
    const Users = app.model.define('users', {
        id: {
            type: DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true
        },
        role_id: {
            type: DataTypes.STRING(36),
            allowNull: false,

        },
        username: {
            type: DataTypes.STRING(36),
            allowNull: false,
            comment: '用户名'
        },

        password: {
            type: DataTypes.STRING(36),
            allowNull: true,
            comment: '密码'
        },

        mobile: {
            type: DataTypes.STRING(11),
            allowNull: true,
            comment: '手机号'
        },

        email: {
            type: DataTypes.STRING(36),
            default: null,
            comment: '邮箱'
        },

        created_at: {
            type: DataTypes.DATE,
            default: date,
            comment: '创建时间'
        },

        updated_at: {
            type: DataTypes.DATE,
            default: date,
            comment: '更新时间'
        },


    },{

        freezeTableName: true, // Model 对应的表名将与model名相同
            timestamps: false,//自动维护时间戳


});


    Users.associate = function () {
        // 如何你想在users表中查询role表中的信息，他就是belongsTo
        app.model.Users.belongsTo(app.model.Roles, {as: 'roles', foreignKey: 'role_id'});
    };
    Users.findByIdWithRoles = async function (id, role_id) {
        return await this.findOne({
            where: {id, role_id: role_id},
        });
    };


    return Users;
};
