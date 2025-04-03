'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('maintenances', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            charger_id: {
                type: Sequelize.INTEGER
            },
            type_id: {
                type: Sequelize.INTEGER
            },
            maintenance_date: {
                type: Sequelize.DATE
            },
            completion_date: {
                type: Sequelize.DATE
            },
            maintenance_type: {
                type: Sequelize.STRING
            },
            technician_name: {
                type: Sequelize.STRING
            },
            maintenance_cost: {
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
        await queryInterface.dropTable('maintenances');
    }
};