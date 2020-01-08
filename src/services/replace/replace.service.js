// Initializes the `replace` service on path `/replace`
const createService = require('./replace.class.js');
const hooks = require('./replace.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/replace', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('replace');

  service.hooks(hooks);
};
