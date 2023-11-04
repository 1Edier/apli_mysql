const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const pedidoSchema = sequelize.define("pedidos", {
  pedidoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

sequelize.sync()
  .then(() => {
    console.log('Modelo de pedidos sincronizado con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar el modelo de pedidos:', error);
  });

module.exports = pedidoSchema;
