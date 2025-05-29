'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
      {
        user_id: 11,
        charger_id: 5,
        type_id: 4,
        title: 'Đặt thành công',
        message: 'Vui lòng đến trạm đúng giờ.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 12,
        charger_id: 4,
        type_id: 3,
        title: 'Đơn hàng đã được xử lý',
        message: 'Cảm ơn bạn đã đặt trạm.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 13,
        charger_id: 3,
        type_id: 2,
        title: 'Thông báo bảo trì',
        message: 'Trạm sẽ được bảo trì lúc 14h.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 14,
        charger_id: 2,
        type_id: 1,
        title: 'Khuyến mãi',
        message: 'Bạn được giảm 10% cho lần sạc tiếp theo.',
        is_read: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 15,
        charger_id: 1,
        type_id: 5,
        title: 'Cảnh báo',
        message: 'Hãy kiểm tra lại thông tin thanh toán.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 16,
        charger_id: 6,
        type_id: 4,
        title: 'Thông tin mới',
        message: 'Trạm đã được nâng cấp phần mềm.',
        is_read: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 17,
        charger_id: 7,
        type_id: 3,
        title: 'Thông báo sự cố',
        message: 'Trạm đang gặp sự cố, vui lòng quay lại sau.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 18,
        charger_id: 8,
        type_id: 2,
        title: 'Cảm ơn bạn',
        message: 'Đơn đặt của bạn đã được xác nhận.',
        is_read: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 19,
        charger_id: 9,
        type_id: 1,
        title: 'Nhắc nhở',
        message: 'Bạn còn 1 lượt sạc miễn phí.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 20,
        charger_id: 10,
        type_id: 6,
        title: 'Hệ thống đang bảo trì',
        message: 'Vui lòng không đặt lịch mới.',
        is_read: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 21,
        charger_id: 1,
        type_id: 4,
        title: 'Thông báo mới',
        message: 'Trạm của bạn đã được bảo trì thành công.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 22,
        charger_id: 2,
        type_id: 3,
        title: 'Sắp hết lượt miễn phí',
        message: 'Bạn còn 1 lượt sạc miễn phí, sử dụng ngay.',
        is_read: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 23,
        charger_id: 3,
        type_id: 2,
        title: 'Khuyến mãi hấp dẫn',
        message: 'Nhận ưu đãi giảm giá 20% cho lần sạc tiếp theo.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 24,
        charger_id: 4,
        type_id: 1,
        title: 'Lịch bảo trì định kỳ',
        message: 'Trạm sẽ bảo trì vào ngày 20/05. Vui lòng chuẩn bị.',
        is_read: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 25,
        charger_id: 5,
        type_id: 5,
        title: 'Cập nhật hệ thống',
        message: 'Ứng dụng đã được cập nhật lên phiên bản mới nhất.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 26,
        charger_id: 6,
        type_id: 4,
        title: 'Thông báo quan trọng',
        message: 'Trạm của bạn sẽ tạm ngưng hoạt động ngày mai.',
        is_read: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 27,
        charger_id: 7,
        type_id: 3,
        title: 'Yêu cầu đánh giá',
        message: 'Hãy đánh giá dịch vụ để nhận quà hấp dẫn.',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 28,
        charger_id: 8,
        type_id: 2,
        title: 'Thông tin thanh toán',
        message: 'Thanh toán của bạn đã được ghi nhận.',
        is_read: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 29,
        charger_id: 9,
        type_id: 1,
        title: 'Tài khoản mới',
        message: 'Chào mừng bạn đến với hệ thống của chúng tôi!',
        is_read: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 30,
        charger_id: 10,
        type_id: 6,
        title: 'Thông báo lỗi hệ thống',
        message: 'Hệ thống đang gặp sự cố, vui lòng thử lại sau.',
        is_read: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    }  
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
