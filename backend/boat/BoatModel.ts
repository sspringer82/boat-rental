import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize(
  'mysql://root:my-secret-pw@localhost:3306/boat-rental',
);

export default class BoatModel extends Model {}

BoatModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Boat', // We need to choose the model name
  },
);
console.log('boat model');
const b = new BoatModel({
  color: 'red',
  brand: 'BMW',
  name: 'X5',
});
b.save();
