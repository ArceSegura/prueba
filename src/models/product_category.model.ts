// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const productCategory = sequelizeClient.define('product_category', {
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (productCategory as any).associate = function (models: any): void {
    // Define associations here
    const {products, categories} = models;

    productCategory.belongsTo(products);
    productCategory.belongsTo(categories);
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return productCategory;
}
