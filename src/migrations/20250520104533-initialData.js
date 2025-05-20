'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      INSERT INTO allcodes (type, keyMap, value)
        VALUES 
        ('ROLE','R1','Admin' ),
        ('ROLE','R2','User' ), 
        ('ROLE','R3','Owner' ),
        ('GENDER','M','Male'),
        ('GENDER','F','Female'),
        ('GENDER','O','Other'),
        ('STATUS','S1','Maintenance'),
        ('STATUS','S2','Booked'),
        ('STATUS','S3','Charging'), 
        ('STATUS','S4','Ready');
        `);

    await queryInterface.sequelize.query(` 
      INSERT INTO users (email, password) 
      VALUES 
          ('admin@gmail.com' , '123456'),
          ('admin1@gmail.com','123456' ); 
      `);

    await queryInterface.sequelize.query(` 
      INSERT INTO locations (location_name, user_id) 
        VALUES 
        ('a','1' ),
        ('b','1' );
    `);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
