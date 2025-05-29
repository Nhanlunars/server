'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ratings', [
      {
        user_id: 1,
        charger_id: 1,
        type_id: 1,
        rating: 4,
        comment: 'Rất tốt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        charger_id: 2,
        type_id: 2,
        rating: 5,
        comment: 'Dịch vụ tuyệt vời',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        charger_id: 3,
        type_id: 3,
        rating: 3,
        comment: 'Bình thường',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        charger_id: 4,
        type_id: 4,
        rating: 2,
        comment: 'Cần cải thiện',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        charger_id: 5,
        type_id: 5,
        rating: 1,
        comment: 'Rất tệ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        charger_id: 6,
        type_id: 1,
        rating: 4,
        comment: 'Ổn định',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7,
        charger_id: 7,
        type_id: 2,
        rating: 5,
        comment: 'Tuyệt vời',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 8,
        charger_id: 8,
        type_id: 3,
        rating: 3,
        comment: 'Tạm ổn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 9,
        charger_id: 9,
        type_id: 4,
        rating: 2,
        comment: 'Chưa tốt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 10,
        charger_id: 10,
        type_id: 5,
        rating: 1,
        comment: 'Không hài lòng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        charger_id: 2,
        type_id: 1,
        rating: 5,
        comment: 'Xuất sắc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        charger_id: 3,
        type_id: 2,
        rating: 4,
        comment: 'Hài lòng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        charger_id: 4,
        type_id: 3,
        rating: 3,
        comment: 'Tạm ổn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        charger_id: 5,
        type_id: 4,
        rating: 2,
        comment: 'Chậm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        charger_id: 6,
        type_id: 5,
        rating: 1,
        comment: 'Quá tệ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        charger_id: 7,
        type_id: 1,
        rating: 5,
        comment: 'Nhanh chóng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7,
        charger_id: 8,
        type_id: 2,
        rating: 4,
        comment: 'Được',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 8,
        charger_id: 9,
        type_id: 3,
        rating: 3,
        comment: 'Bình thường',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 9,
        charger_id: 10,
        type_id: 4,
        rating: 2,
        comment: 'Không ổn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 10,
        charger_id: 1,
        type_id: 5,
        rating: 1,
        comment: 'Tệ hại',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        charger_id: 3,
        type_id: 1,
        rating: 4,
        comment: 'Ổn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        charger_id: 4,
        type_id: 2,
        rating: 3,
        comment: 'Bình thường',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        charger_id: 5,
        type_id: 3,
        rating: 2,
        comment: 'Tạm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        charger_id: 6,
        type_id: 4,
        rating: 1,
        comment: 'Không hài lòng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 5,
        charger_id: 7,
        type_id: 5,
        rating: 5,
        comment: 'Rất hài lòng',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 6,
        charger_id: 8,
        type_id: 1,
        rating: 4,
        comment: 'Hợp lý',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 7,
        charger_id: 9,
        type_id: 2,
        rating: 3,
        comment: 'Được',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 8,
        charger_id: 10,
        type_id: 3,
        rating: 2,
        comment: 'Tạm ổn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 9,
        charger_id: 1,
        type_id: 4,
        rating: 1,
        comment: 'Không tốt',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 10,
        charger_id: 2,
        type_id: 5,
        rating: 5,
        comment: 'Hoàn hảo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
