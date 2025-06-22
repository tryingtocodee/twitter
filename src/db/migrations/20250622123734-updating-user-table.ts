import { QueryInterface } from "sequelize";

module.exports = {
  async up (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE User
       ADD COLUMN profilePic VARCHAR(255) DEFAULT NULL,
       ADD COLUMN backgroundProfilePic VARCHAR(255) DEFAULT NULL,
       ADD COLUMN bio VARCHAR(255) DEFAULT NULL,
       ADD COLUMN profileStatus ENUM('public' , 'private' ) DEFAULT 'public'
      `)
  },

  async down (queryInterface : QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE User
        DROP COLUMN profilePic,
        DROP COLUMN backgroundProfilePic,
        DROP COLUMN bio
      `)
  }
};
