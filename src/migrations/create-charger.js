'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('charger', {
            charger_id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            secret_id: {
                type: Sequelize.STRING
            },
            charger_name: {
                type: Sequelize.STRING
            },
            model: {
                type: Sequelize.STRING
            },
            capacity: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            installation_date: {
                type: Sequelize.DATE
            }, 
            last_maintence_date: {
                type: Sequelize.DATE
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            location_id: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('charger');
    }
};