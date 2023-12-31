const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config();

const connection = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST || 'localhost',
    dialect: 'mysql',
    logging: false,
    define: {
      stringify: false
    }
  },
);

connection.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados realizada com sucesso!');
  }).catch((error: any) => {
    console.log('Erro: Conexão com o banco de dados não realizada com sucesso.', error);
  });

export default connection;
