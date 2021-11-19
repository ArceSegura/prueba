// Initializes the `product_category` service on path `/product_category`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ProductCategory } from './product_category.class';
import createModel from '../../models/product_category.model';
import hooks from './product_category.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'product_category': ProductCategory & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/product_category', new ProductCategory(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('product_category');

  service.hooks(hooks);
}
