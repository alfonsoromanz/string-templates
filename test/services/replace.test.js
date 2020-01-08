const assert = require('assert');
const app = require('../../src/app');

describe('\'replace\' service', () => {
  it('registered the service', () => {
    const service = app.service('replace');

    assert.ok(service, 'Registered the service');
  });
});
