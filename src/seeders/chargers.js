'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Chargers', [
      // vị trí userid 21
      {
        charger_name: 'Trụ số 1',
        capacity: '220V',
        installation_date: '2025-01-01 08:00:00',
        last_maintenance_date: '2025-03-01 12:00:00',
        location_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 2',
        capacity: '110V',
        installation_date: '2025-01-05 09:00:00',
        last_maintenance_date: '2025-03-05 12:00:00',
        location_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 3',
        capacity: '220V',
        installation_date: '2025-01-10 10:00:00',
        last_maintenance_date: '2025-03-10 12:00:00',
        location_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // vị trí 22
      {
        charger_name: 'Trụ số 4',
        capacity: '110V',
        installation_date: '2025-01-15 11:00:00',
        last_maintenance_date: '2025-03-15 12:00:00',
        location_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 5',
        capacity: '220V',
        installation_date: '2025-01-20 12:00:00',
        last_maintenance_date: '2025-03-20 12:00:00',
        location_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 6',
        capacity: '110V',
        installation_date: '2025-01-25 08:00:00',
        last_maintenance_date: '2025-03-25 12:00:00',
        location_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // vị trí 23
      {
        charger_name: 'Trụ số 7',
        capacity: '220V',
        installation_date: '2025-01-30 09:00:00',
        last_maintenance_date: '2025-03-30 12:00:00',
        location_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 8',
        capacity: '110V',
        installation_date: '2025-02-04 10:00:00',
        last_maintenance_date: '2025-04-04 12:00:00',
        location_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //24
      {
        charger_name: 'Trụ số 9',
        capacity: '220V',
        installation_date: '2025-02-09 11:00:00',
        last_maintenance_date: '2025-04-09 12:00:00',
        location_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 10',
        capacity: '110V',
        installation_date: '2025-02-14 12:00:00',
        last_maintenance_date: '2025-04-14 12:00:00',
        location_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 11',
        capacity: '220V',
        installation_date: '2025-02-19 08:00:00',
        last_maintenance_date: '2025-04-19 12:00:00',
        location_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //25
      {
        charger_name: 'Trụ số 12',
        capacity: '110V',
        installation_date: '2025-02-24 09:00:00',
        last_maintenance_date: '2025-04-24 12:00:00',
        location_id: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 13',
        capacity: '220V',
        installation_date: '2025-03-01 10:00:00',
        last_maintenance_date: '2025-05-01 12:00:00',
        location_id: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 14',
        capacity: '110V',
        installation_date: '2025-03-06 11:00:00',
        last_maintenance_date: '2025-05-06 12:00:00',
        location_id: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //26
      {
        charger_name: 'Trụ số 15',
        capacity: '220V',
        installation_date: '2025-03-11 12:00:00',
        last_maintenance_date: '2025-05-11 12:00:00',
        location_id: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 16',
        capacity: '110V',
        installation_date: '2025-03-16 08:00:00',
        last_maintenance_date: '2025-05-16 12:00:00',
        location_id: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 17',
        capacity: '220V',
        installation_date: '2025-03-21 09:00:00',
        last_maintenance_date: '2025-05-21 12:00:00',
        location_id: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //27
      {
        charger_name: 'Trụ số 18',
        capacity: '110V',
        installation_date: '2025-03-26 10:00:00',
        last_maintenance_date: '2025-05-26 12:00:00',
        location_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 19',
        capacity: '220V',
        installation_date: '2025-03-31 11:00:00',
        last_maintenance_date: '2025-05-31 12:00:00',
        location_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 20',
        capacity: '110V',
        installation_date: '2025-04-05 12:00:00',
        last_maintenance_date: '2025-06-05 12:00:00',
        location_id: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 21',
        capacity: '220V',
        installation_date: '2025-04-10 08:00:00',
        last_maintenance_date: '2025-06-10 12:00:00',
        location_id: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //28
      {
        charger_name: 'Trụ số 22',
        capacity: '110V',
        installation_date: '2025-04-15 09:00:00',
        last_maintenance_date: '2025-06-15 12:00:00',
        location_id: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 23',
        capacity: '220V',
        installation_date: '2025-04-20 10:00:00',
        last_maintenance_date: '2025-06-20 12:00:00',
        location_id: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 24',
        capacity: '110V',
        installation_date: '2025-04-25 11:00:00',
        last_maintenance_date: '2025-06-25 12:00:00',
        location_id: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 25',
        capacity: '220V',
        installation_date: '2025-04-30 12:00:00',
        last_maintenance_date: '2025-06-30 12:00:00',
        location_id: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //29
      {
        charger_name: 'Trụ số 26',
        capacity: '110V',
        installation_date: '2025-05-05 08:00:00',
        last_maintenance_date: '2025-07-05 12:00:00',
        location_id: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 27',
        capacity: '220V',
        installation_date: '2025-05-10 09:00:00',
        last_maintenance_date: '2025-07-10 12:00:00',
        location_id: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 28',
        capacity: '110V',
        installation_date: '2025-05-15 10:00:00',
        last_maintenance_date: '2025-07-15 12:00:00',
        location_id: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 29',
        capacity: '220V',
        installation_date: '2025-05-20 11:00:00',
        last_maintenance_date: '2025-07-20 12:00:00',
        location_id: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //30
      {
        charger_name: 'Trụ số 30',
        capacity: '110V',
        installation_date: '2025-05-25 12:00:00',
        last_maintenance_date: '2025-07-25 12:00:00',
        location_id: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 31',
        capacity: '110V',
        installation_date: '2025-05-25 12:00:00',
        last_maintenance_date: '2025-07-25 12:00:00',
        location_id: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 32',
        capacity: '110V',
        installation_date: '2025-05-25 12:00:00',
        last_maintenance_date: '2025-07-25 12:00:00',
        location_id: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_name: 'Trụ số 33',
        capacity: '110V',
        installation_date: '2025-05-25 12:00:00',
        last_maintenance_date: '2025-07-25 12:00:00',
        location_id: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
