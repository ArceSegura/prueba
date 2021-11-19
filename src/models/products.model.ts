// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const products = sequelizeClient.define('products', {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    },
    paranoid: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (products as any).associate = function (models: any): void {
    // Define associations here
    const {categories, product_category} = models;

    products.belongsToMany(categories, {through: product_category});
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return products;
}
