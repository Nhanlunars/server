'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('usege_histories', {
            usage_id : {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
    user_id: {
                type: Sequelize.INTEGER
            },
            charger_id: {
                type: Sequelize.INTEGER
            },
            type_id: {
                type: Sequelize.INTEGER
            },
            start_time: {
                type: Sequelize.DATE
            },
            end_time: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('usege_histories');
    }
};