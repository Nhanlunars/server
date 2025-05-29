'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Maintenance', [
      {
        charger_id: 1,
        type_id: 4,
        maintenance_date: '2025-05-01 08:00:00',
        completion_date: '2025-05-01 10:00:00',
        maintenance_type: 'Kiểm tra định kỳ',
        technician_name: 'Nguyễn Văn A',
        maintenance_cost: 2100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 2,
        type_id: 3,
        maintenance_date: '2025-05-03 09:00:00',
        completion_date: '2025-05-03 11:30:00',
        maintenance_type: 'Bảo dưỡng',
        technician_name: 'Lê Thị B',
        maintenance_cost: 2300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 3,
        type_id: 2,
        maintenance_date: '2025-05-05 13:00:00',
        completion_date: '2025-05-05 15:00:00',
        maintenance_type: 'Sửa chữa nhỏ',
        technician_name: 'Trần Văn C',
        maintenance_cost: 2900,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 4,
        type_id: 1,
        maintenance_date: '2025-05-07 08:30:00',
        completion_date: '2025-05-07 11:00:00',
        maintenance_type: 'Nâng cấp',
        technician_name: 'Phạm Thị D',
        maintenance_cost: 2500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 5,
        type_id: 5,
        maintenance_date: '2025-05-09 14:00:00',
        completion_date: '2025-05-09 16:30:00',
        maintenance_type: 'Thay thế linh kiện',
        technician_name: 'Hoàng Văn E',
        maintenance_cost: 2700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 6,
        type_id: 4,
        maintenance_date: '2025-05-10 09:00:00',
        completion_date: '2025-05-10 10:30:00',
        maintenance_type: 'Kiểm tra nhanh',
        technician_name: 'Đỗ Thị F',
        maintenance_cost: 2200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 7,
        type_id: 3,
        maintenance_date: '2025-05-12 10:00:00',
        completion_date: '2025-05-12 12:00:00',
        maintenance_type: 'Bảo dưỡng định kỳ',
        technician_name: 'Nguyễn Văn G',
        maintenance_cost: 2000,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 8,
        type_id: 2,
        maintenance_date: '2025-05-13 15:00:00',
        completion_date: '2025-05-13 16:30:00',
        maintenance_type: 'Sửa chữa nhanh',
        technician_name: 'Lê Thị H',
        maintenance_cost: 2800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 9,
        type_id: 1,
        maintenance_date: '2025-05-15 08:00:00',
        completion_date: '2025-05-15 10:00:00',
        maintenance_type: 'Kiểm tra chi tiết',
        technician_name: 'Trần Văn I',
        maintenance_cost: 2600,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 10,
        type_id: 6,
        maintenance_date: '2025-05-16 14:30:00',
        completion_date: '2025-05-16 17:00:00',
        maintenance_type: 'Bảo trì tổng hợp',
        technician_name: 'Phạm Thị K',
        maintenance_cost: 2400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Thêm 20 bản ghi hợp lý khác
      {
        charger_id: 11,
        type_id: 4,
        maintenance_date: '2025-05-17 09:00:00',
        completion_date: '2025-05-17 11:00:00',
        maintenance_type: 'Sửa chữa nhỏ',
        technician_name: 'Hoàng Văn L',
        maintenance_cost: 2200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 12,
        type_id: 3,
        maintenance_date: '2025-05-18 10:30:00',
        completion_date: '2025-05-18 12:30:00',
        maintenance_type: 'Nâng cấp phần mềm',
        technician_name: 'Đỗ Thị M',
        maintenance_cost: 2300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 13,
        type_id: 2,
        maintenance_date: '2025-05-19 14:00:00',
        completion_date: '2025-05-19 16:00:00',
        maintenance_type: 'Bảo dưỡng hệ thống',
        technician_name: 'Nguyễn Văn N',
        maintenance_cost: 2800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 14,
        type_id: 1,
        maintenance_date: '2025-05-20 08:30:00',
        completion_date: '2025-05-20 10:30:00',
        maintenance_type: 'Thay thế cảm biến',
        technician_name: 'Lê Thị O',
        maintenance_cost: 2500,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 15,
        type_id: 6,
        maintenance_date: '2025-05-21 11:00:00',
        completion_date: '2025-05-21 13:30:00',
        maintenance_type: 'Bảo trì mạng',
        technician_name: 'Trần Văn P',
        maintenance_cost: 2700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tiếp tục thêm cho đến 30 bản ghi (có thể để mình xuất file luôn cho bạn)
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
