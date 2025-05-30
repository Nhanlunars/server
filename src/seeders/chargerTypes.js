'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Charger_types', [
      //21
      {
        charger_id: 7,
        type_name: 'Sạc Xe Điện FEROS 48V/60V 12Ah-24Ah',
        describe: ' Hiển thị mức độ pin thông qua màn hình điện tử, báo mức độ pin qua đó có thể kiểm tra ắc quy còn tình trạng tốt hay không.',
        default_price: 2000,
        status: 'S1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 8,
        type_name: 'Sạc Xe Đạp Điện 6led 48V',
        describe: 'Kiểm soát nhiệt độ mát mẻ, Tự đông ngắt khi sạc đầy bình.',
        default_price: 2500,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 9,
        type_name: 'Sạc xe điện 48V 12Ah Tự Ngắt Chống Phồng Bình',
        describe: 'Sạc xả xung nhiều cấp độ hiệu quả cao khử Sufat bảo dưỡng kéo dài tuổi thọ bình',
        default_price: 2800,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //22
      {
        charger_id: 10,
        type_name: 'Sạc Xe Điện 60V-12AH Chống Phồng Bình, Phích Cái 3 Chấu',
        describe: 'Cấu trúc nhỏ gọn, kích thước nhỏ, trọng lượng nặng 450g, dễ dàng thực hiện và dễ dàng để sử dụng.',
        default_price: 3000,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 11,
        type_name: 'Sạc xe điện 60v - 96v( 5 bình - 8 bình) 12ah và 20ah',
        describe: 'Sạc xả xung nhiều cấp độ hiệu quả cao',
        default_price: 2200,
        status: 'S1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 12,
        type_name: 'Sạc xe đạp điện xe máy điện 48V-12Ah/20Ah 60V-20Ah',
        describe: 'Có 7 đèn nguồn pin, rõ ràng để xem trạng thái pin.',
        default_price: 2700,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //23
      {
        charger_id: 13,
        type_name: 'Sạc xe điện tự động ngắt khi đầy 60v - 84v',
        describe: 'Cấu trúc nhỏ gọn, kích thước nhỏ',
        default_price: 2900,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 14,
        type_name: 'Sạc 6V-1000mA cho ô tô , xe máy điện',
        describe: 'Có thể dùng sạc cho các thiết bị dùng điện áp 6V',
        default_price: 2300,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //24
      {
        charger_id: 15,
        type_name: 'Loại 9',
        describe: 'Mô tả loại 9',
        default_price: 2100,
        status: 'S1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 16,
        type_name: 'Sạc 24V20ah có đèn báo, tự ngắt khi sạc đầy.',
        describe: 'Sạc  24V dùng để sạc máy hái chè và thiết bị có nguồn điện 24V, điện lượng từ 8-12Ah',
        default_price: 2400,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 16,
        type_name: 'Loại 11',
        describe: 'Mô tả loại 11',
        default_price: 2600,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        charger_id: 17,
        type_name: 'Sạc Xe Điện 60V20AH Sạc Tự Ngắt Khi Đầy Chân Vuông Đặc',
        describe: 'Sạc có quạt tản nhiệt giúp cho mạch hoạt động hiệu quả.',
        default_price: 2900,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 18,
        type_name: 'Bộ Sạc 12V Cho Xe Máy, Xe Điện Dung Lượng 1,2AH Đến 17AH ',
        describe: 'Thiết kế nhỏ gọn an toàn khi sử dụng, tiện lợi với 2 cực gắn sẵn 2 kẹp',
        default_price: 3000,
        status: 'S1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 19,
        type_name: 'Sạc nhanh 5A',
        describe: 'Tính năng tự động ngắt khi sạc đầy sẽ bảo vệ pin khỏi sạc quá mức',
        default_price: 2000,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        charger_id: 19,
        type_name: 'Sạc xe đạp điện / xe máy điện (48V-12Ah)',
        describe: 'Tự ngắt khi đầy điện, chống phồng bình',
        default_price: 2500,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 20,
        type_name: 'Sạc xe đạp điện / xe máy điện (48V-12Ah)',
        describe: 'Có báo pin, tự ngắt khi đầy, chống phồng',
        default_price: 2800,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 21,
        type_name: 'Sạc xe điện 60v- 96V 5 bình- 8 bình chống phồng bình',
        describe: 'Điện áp đầu vào 220V~. Điện áp đầu ra 72V.',
        default_price: 2200,
        status: 'S1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        charger_id: 22,
        type_name: 'Sạc xe điện 60v20ah - 96v20ah',
        describe: 'Có báo pin, tự ngắt khi đầy',
        default_price: 2700,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 23,
        type_name: 'Sạc xe điện 7- 8 bình 20ah',
        describe: 'Tự động ngắt khi đầy, chống phồng bình',
        default_price: 2900,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 24,
        type_name: 'Sạc 6V-1000mA  , xe máy điện',
        describe: 'Dòng điện ra 1Ah phù hợp với acquy dưới 14Ah và bình acquy xe điện',
        default_price: 2300,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 25,
        type_name: 'Sạc xe điện 48V 12Ah Tự Ngắt Chống Phồng Bình -7 Đèn Báo',
        describe: 'Kiểm soát nhiệt độ mát mẻ, Thời gian sạc rút ngắn',
        default_price: 2100,
        status: 'S1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        charger_id: 25,
        type_name: 'Sạc Xe Điện FEROS 48V/60V 12Ah-24Ah',
        describe: 'Cấu trúc nhỏ gọn, kích thước nhỏ, trọng lượng nặng 450g',
        default_price: 2400,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 23,
        type_name: 'Sạc xe điện báo pin 72V- 12 ah & 72V- 20ah',
        describe: '6 bình ác quy',
        default_price: 2600,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 24,
        type_name: 'Sạc Xe Điện Báo Pin 48-60v - 12-20ah Hiệu BLQ ',
        describe: 'Hiển Thị Màn Hình Điện Tử, Chế Độ Tự Ngắ',
        default_price: 2900,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 25,
        type_name: 'Sạc 5 bình acquy 60-12a-20a',
        describe: 'Tự ngắt chống phồng bình',
        default_price: 3000,
        status: 'S1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        charger_id: 26,
        type_name: 'Máy sạc bình acquy 12v tự ngắt',
        describe: 'Sử dụng vi xử lý (CPU) để điều khiển máy nạp acquy',
        default_price: 2000,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 26,
        type_name: 'Sạc Xe Đạp Điện Xe Máy Điện 48V 60V',
        describe: 'IC thông minh giúp sạc pin đầy hơn, tăng phạm vi hoạt động của xe',
        default_price: 2500,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 28,
        type_name: 'Sạc Xe Điện 48V 12Ah',
        describe: 'Tự động tắt sau khi sạc đầy pin',
        default_price: 2800,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 29,
        type_name: 'Sạc Xe Điện 48V 12Ah Tự Ngắt Chống Phồng Bình 60V 20A ',
        describe: 'Giảm thời gian sạc, vỏ ABS chống cháy',
        default_price: 2200,
        status: 'S1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        charger_id: 29,
        type_name: 'Sạc xe điện báo pin 72V- 12 ah & 72V- 20ah',
        describe: '6 bình ác quy',
        default_price: 2600,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 7,
        type_name: 'Sạc Xe Điện Báo Pin 48-60v - 12-20ah Hiệu BLQ ',
        describe: 'Hiển Thị Màn Hình Điện Tử, Chế Độ Tự Ngắ',
        default_price: 2900,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 8,
        type_name: 'Sạc 5 bình acquy 60-12a-20a',
        describe: 'Tự ngắt chống phồng bình',
        default_price: 3000,
        status: 'S1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        charger_id: 9,
        type_name: 'Sạc xe điện 48V 12Ah Tự Ngắt Chống Phồng Bình',
        describe: 'IC thông minh giúp sạc đầy bình hơn từ đó tăng hành trình đi được của xe',
        default_price: 2700,
        status: 'S4',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
  }
};
