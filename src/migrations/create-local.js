'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('locations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            location_name: {
                type: Sequelize.STRING
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            address: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            district: {
                type: Sequelize.STRING
            },
            ward: {
                type: Sequelize.STRING
            },
            lat: {
                type: Sequelize.FLOAT
            },
            lng: {
                type: Sequelize.FLOAT
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
        await queryInterface.dropTable('locations');
    }
};