// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const categories = sequelizeClient.define('categories', {
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
    paranoid: true, /* SOFT DELETE */
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (categories as any).associate = function (models: any): void {
    // Define associations here
    const {products, product_category} = models;

    categories.belongsToMany(products, {through: product_category})
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return categories;
}
