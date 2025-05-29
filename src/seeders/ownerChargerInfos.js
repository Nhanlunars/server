'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
    {
        user_id: 1,
        bank_name: 'MB Bank',
        account_number: '123456789',
        account_name: 'Nguyen Thien',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 2,
        bank_name: 'VietinBank',
        account_number: '989809',
        account_name: 'Van An',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 3,
        bank_name: 'Vietcombank',
        account_number: '778788',
        account_name: 'Anh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 4,
        bank_name: 'Mb',
        account_number: '98988',
        account_name: 'Huynh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 5,
        bank_name: 'Techcombank',
        account_number: '9892998987',
        account_name: 'Dang Van nam',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 6,
        bank_name: 'MB',
        account_number: '0908767899',
        account_name: 'Tran Thi Anh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 7,
        bank_name: 'ACB',
        account_number: '123789456',
        account_name: 'Hoang Minh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 8,
        bank_name: 'TPBank',
        account_number: '9988776655',
        account_name: 'Le Van Bao',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 9,
        bank_name: 'BIDV',
        account_number: '4455667788',
        account_name: 'Nguyen Hoa',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 10,
        bank_name: 'Sacombank',
        account_number: '7788996655',
        account_name: 'Pham Tuan',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 11,
        bank_name: 'Techcombank',
        account_number: '4455998877',
        account_name: 'Nguyen Linh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 12,
        bank_name: 'VietinBank',
        account_number: '123123123',
        account_name: 'Tran Nam',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 13,
        bank_name: 'Vietcombank',
        account_number: '999888777',
        account_name: 'Le Ha',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 14,
        bank_name: 'BIDV',
        account_number: '666555444',
        account_name: 'Pham Binh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 15,
        bank_name: 'MB Bank',
        account_number: '555666777',
        account_name: 'Ly Kha',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 16,
        bank_name: 'ACB',
        account_number: '333222111',
        account_name: 'Hoang Vu',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 17,
        bank_name: 'OCB',
        account_number: '444555666',
        account_name: 'Dang Thi Mai',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 18,
        bank_name: 'VPBank',
        account_number: '777888999',
        account_name: 'Nguyen Van C',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 19,
        bank_name: 'TPBank',
        account_number: '555444333',
        account_name: 'Hoang Kim',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 20,
        bank_name: 'Sacombank',
        account_number: '1122334455',
        account_name: 'Pham Long',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 21,
        bank_name: 'BIDV',
        account_number: '2233445566',
        account_name: 'Le My',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 22,
        bank_name: 'VietinBank',
        account_number: '8877665544',
        account_name: 'Van Quan',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 23,
        bank_name: 'ACB',
        account_number: '3344556677',
        account_name: 'Nguyen Hien',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 24,
        bank_name: 'Techcombank',
        account_number: '5566778899',
        account_name: 'Hoang Son',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 25,
        bank_name: 'MB Bank',
        account_number: '8899776655',
        account_name: 'Le Trang',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 26,
        bank_name: 'Sacombank',
        account_number: '2233445566',
        account_name: 'Pham Phuc',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 27,
        bank_name: 'Vietcombank',
        account_number: '5544332211',
        account_name: 'Nguyen Lam',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 28,
        bank_name: 'TPBank',
        account_number: '6655443322',
        account_name: 'Hoang Lan',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 29,
        bank_name: 'BIDV',
        account_number: '9988776655',
        account_name: 'Tran Ky',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 30,
        bank_name: 'ACB',
        account_number: '7766554433',
        account_name: 'Le Phuong',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    ]);
},

  down: async (queryInterface, Sequelize) => {
    
  }
};
