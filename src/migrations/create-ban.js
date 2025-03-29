'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user_ban_history', {
            ban_id : {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            ban_count: {
                type: Sequelize.INTEGER
            },
            cancellation_count: {
                type: Sequelize.INTEGER
            },
            last_ban_start: {
                type: Sequelize.DATE
            },
            last_ban_end: {
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
        await queryInterface.dropTable('user_ban_history');
    }
};