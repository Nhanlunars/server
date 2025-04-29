'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('chargers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            charger_name: {
                type: Sequelize.STRING
            },
            capacity: {
                type: Sequelize.STRING
            },
            installation_date: {
                type: Sequelize.DATE
            }, 
            last_maintence_date: {
                type: Sequelize.DATE
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
        await queryInterface.dropTable('chargers');
    }
};