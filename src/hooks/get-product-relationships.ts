// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (options = {}): Hook => {
  return async (context: HookContext): Promise<HookContext> => {

    const sequelize = context.app.get('sequelizeClient');

    const { categories  } = sequelize.models;

    context.params.sequelize = {
      include:  [
        {
          model: categories,
          attributes: ['name']
        }
      ],
      raw:false,
    } 

    return context;
  };
};