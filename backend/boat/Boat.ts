import { Sequelize, Model, DataTypes, Optional } from 'sequelize';

const sequelize = new Sequelize(
  'mysql://root:topSecret@localhost:3306/boat-rental',
);

export interface BoatAttributes {
  id: number;
  color: string;
  brand: string;
  name: string;
}

export interface BoatCreationAttributes
  extends Optional<BoatAttributes, 'id'> {}

export default class Boat
  extends Model<BoatAttributes, BoatCreationAttributes>
  implements BoatAttributes
{
  public id!: number;
  public color!: string;
  public brand!: string;
  public name!: string;
}

Boat.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'boats',
    sequelize, // passing the `sequelize` instance is required
    timestamps: false,
  },
);
