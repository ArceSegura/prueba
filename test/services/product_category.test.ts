import app from '../../src/app';

describe('\'product_category\' service', () => {
  it('registered the service', () => {
    const service = app.service('product_category');
    expect(service).toBeTruthy();
  });
});
