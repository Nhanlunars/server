'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservations', [
      {
        user_id: 1,
        charger_id: 1,
        type_id: 1,
        start_time: new Date('2025-06-01T08:00:00'),
        end_time: new Date('2025-06-01T09:00:00'),
        note: 'Đặt chỗ buổi sáng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        charger_id: 2,
        type_id: 2,
        start_time: new Date('2025-06-01T09:00:00'),
        end_time: new Date('2025-06-01T10:00:00'),
        note: 'Đặt chỗ buổi sáng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        charger_id: 3,
        type_id: 3,
        start_time: new Date('2025-06-01T10:00:00'),
        end_time: new Date('2025-06-01T11:00:00'),
        note: 'Đặt chỗ buổi trưa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        charger_id: 4,
        type_id: 1,
        start_time: new Date('2025-06-01T11:00:00'),
        end_time: new Date('2025-06-01T12:00:00'),
        note: 'Đặt chỗ buổi trưa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        charger_id: 5,
        type_id: 2,
        start_time: new Date('2025-06-01T12:00:00'),
        end_time: new Date('2025-06-01T13:00:00'),
        note: 'Đặt chỗ buổi trưa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        charger_id: 6,
        type_id: 3,
        start_time: new Date('2025-06-01T13:00:00'),
        end_time: new Date('2025-06-01T14:00:00'),
        note: 'Đặt chỗ buổi chiều',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7,
        charger_id: 7,
        type_id: 1,
        start_time: new Date('2025-06-01T14:00:00'),
        end_time: new Date('2025-06-01T15:00:00'),
        note: 'Đặt chỗ buổi chiều',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 8,
        charger_id: 8,
        type_id: 2,
        start_time: new Date('2025-06-01T15:00:00'),
        end_time: new Date('2025-06-01T16:00:00'),
        note: 'Đặt chỗ buổi chiều',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 9,
        charger_id: 9,
        type_id: 3,
        start_time: new Date('2025-06-01T16:00:00'),
        end_time: new Date('2025-06-01T17:00:00'),
        note: 'Đặt chỗ buổi chiều',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 10,
        charger_id: 10,
        type_id: 1,
        start_time: new Date('2025-06-01T17:00:00'),
        end_time: new Date('2025-06-01T18:00:00'),
        note: 'Đặt chỗ buổi tối',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 11,
        charger_id: 11,
        type_id: 2,
        start_time: new Date('2025-06-01T18:00:00'),
        end_time: new Date('2025-06-01T19:00:00'),
        note: 'Đặt chỗ buổi tối',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 12,
        charger_id: 12,
        type_id: 3,
        start_time: new Date('2025-06-01T19:00:00'),
        end_time: new Date('2025-06-01T20:00:00'),
        note: 'Đặt chỗ buổi tối',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 13,
        charger_id: 13,
        type_id: 1,
        start_time: new Date('2025-06-02T08:00:00'),
        end_time: new Date('2025-06-02T09:00:00'),
        note: 'Đặt chỗ buổi sáng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 14,
        charger_id: 14,
        type_id: 2,
        start_time: new Date('2025-06-02T09:00:00'),
        end_time: new Date('2025-06-02T10:00:00'),
        note: 'Đặt chỗ buổi sáng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 15,
        charger_id: 15,
        type_id: 3,
        start_time: new Date('2025-06-02T10:00:00'),
        end_time: new Date('2025-06-02T11:00:00'),
        note: 'Đặt chỗ buổi trưa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 16,
        charger_id: 16,
        type_id: 1,
        start_time: new Date('2025-06-02T11:00:00'),
        end_time: new Date('2025-06-02T12:00:00'),
        note: 'Đặt chỗ buổi trưa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 17,
        charger_id: 17,
        type_id: 2,
        start_time: new Date('2025-06-02T12:00:00'),
        end_time: new Date('2025-06-02T13:00:00'),
        note: 'Đặt chỗ buổi trưa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 18,
        charger_id: 18,
        type_id: 3,
        start_time: new Date('2025-06-02T13:00:00'),
        end_time: new Date('2025-06-02T14:00:00'),
        note: 'Đặt chỗ buổi chiều',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        charger_id: 19,
        type_id: 1,
        start_time: new Date('2025-06-02T14:00:00'),
        end_time: new Date('2025-06-02T15:00:00'),
        note: 'Đặt chỗ buổi chiều',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 20,
        charger_id: 20,
        type_id: 2,
        start_time: new Date('2025-06-02T15:00:00'),
        end_time: new Date('2025-06-02T16:00:00'),
        note: 'Đặt chỗ buổi chiều',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 21,
        charger_id: 21,
        type_id: 3,
        start_time: new Date('2025-06-02T16:00:00'),
        end_time: new Date('2025-06-02T17:00:00'),
        note: 'Đặt chỗ buổi chiều',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 22,
        charger_id: 22,
        type_id: 1,
        start_time: new Date('2025-06-02T17:00:00'),
        end_time: new Date('2025-06-02T18:00:00'),
        note: 'Đặt chỗ buổi tối',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 23,
        charger_id: 23,
        type_id: 2,
        start_time: new Date('2025-06-02T18:00:00'),
        end_time: new Date('2025-06-02T19:00:00'),
        note: 'Đặt chỗ buổi tối',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 24,
        charger_id: 24,
        type_id: 3,
        start_time: new Date('2025-06-02T19:00:00'),
        end_time: new Date('2025-06-02T20:00:00'),
        note: 'Đặt chỗ buổi tối',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 25,
        charger_id: 25,
        type_id: 1,
        start_time: new Date('2025-06-02T20:00:00'),
        end_time: new Date('2025-06-02T21:00:00'),
        note: 'Đặt chỗ buổi tối',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 26,
        charger_id: 26,
        type_id: 2,
        start_time: new Date('2025-06-02T21:00:00'),
        end_time: new Date('2025-06-02T22:00:00'),
        note: 'Đặt chỗ buổi tối',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 27,
        charger_id: 27,
        type_id: 3,
        start_time: new Date('2025-06-02T22:00:00'),
        end_time: new Date('2025-06-02T23:00:00'),
        note: 'Đặt chỗ khuya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 28,
        charger_id: 28,
        type_id: 1,
        start_time: new Date('2025-06-02T23:00:00'),
        end_time: new Date('2025-06-03T00:00:00'),
        note: 'Đặt chỗ khuya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 29,
        charger_id: 29,
        type_id: 2,
        start_time: new Date('2025-06-03T00:00:00'),
        end_time: new Date('2025-06-03T01:00:00'),
        note: 'Đặt chỗ khuya',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 30,
        charger_id: 30,
        type_id: 3,
        start_time: new Date('2025-06-03T01:00:00'),
        end_time: new Date('2025-06-03T02:00:00'),
        note: 'Đặt chỗ khuya',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
