'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('owner_charger_infos', [
    {
        user_id: 38,
        bank_name: 'MB Bank',
        account_number: '123456789',
        account_name: 'Nguyen Thien',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 39,
        bank_name: 'VietinBank',
        account_number: '989809',
        account_name: 'Van An',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 40,
        bank_name: 'Vietcombank',
        account_number: '778788',
        account_name: 'Anh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 41,
        bank_name: 'Mb',
        account_number: '98988',
        account_name: 'Huynh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 42,
        bank_name: 'Techcombank',
        account_number: '9892998987',
        account_name: 'Dang Van nam',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 43,
        bank_name: 'MB',
        account_number: '0908767899',
        account_name: 'Tran Thi Anh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 44,
        bank_name: 'ACB',
        account_number: '123789456',
        account_name: 'Hoang Minh',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        user_id: 45,
        bank_name: 'TPBank',
        account_number: '9988776655',
        account_name: 'Le Van Bao',
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    

    ]);
},

  down: async (queryInterface, Sequelize) => {
    
  }
};
