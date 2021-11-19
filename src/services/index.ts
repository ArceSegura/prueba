import { Application } from '../declarations';
import products from './products/products.service';
import categories from './categories/categories.service';
import productCategory from './product_category/product_category.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(products);
  app.configure(categories);
  app.configure(productCategory);
}
