'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('owner_charger_info', {
            info_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            user_id: {
                type: Sequelize.INTEGER
            },
            bank_name: {
                type: Sequelize.STRING
            },
            account_number: {
                type: Sequelize.STRING
            },
            account_name: {
                type: Sequelize.STRING
            },
            picture: {
                type: Sequelize.BLOB('long')
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
        await queryInterface.dropTable('owner_charger_info');
    }
};