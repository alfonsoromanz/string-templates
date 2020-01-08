const replace = require('./replace/replace.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(replace);
};
