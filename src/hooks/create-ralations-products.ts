// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {

    /* Hook after create products */

    const {data, result} = context;
    const sequelize = context.app.get('sequelizeClient');
    const { product_category } = sequelize.models;

    const productId :Number = result.id;
    const newCategories :Number[] = data.categories;

    /* Delete current related categories */
    product_category.destroy( { where: { productId } } );

    /* Create new related categories */
    newCategories.forEach((categoryId : Number) => {
      product_category.create({categoryId, productId});
    });
    
    return context;
  };
};
