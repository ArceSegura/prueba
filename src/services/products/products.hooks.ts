
import getProductRelationships from '../../hooks/get-product-relationships';
import createRalationsProducts from '../../hooks/create-ralations-products';
export default {
  before: {
    all: [],
    find: [getProductRelationships()],
    get: [getProductRelationships()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [createRalationsProducts()],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
