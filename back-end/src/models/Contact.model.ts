const Sequelize = require('sequelize');
import db from '../database/db';

const Contact = db.define('contact', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  company: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cellPhone: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
    tableName: 'contact'
});
  
Contact.sync();

export default Contact;
