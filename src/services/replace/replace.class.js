/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    String.prototype.replaceAll = function(searchStr, replaceStr) {
      var str = this;
      searchStr = searchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      return str.replace(new RegExp(searchStr, 'gi'), replaceStr);
    };

    const templates = [
      'Hi {{name}}. This is the sample text for the {{notification_type}}',
      'Hello {{name}} {{lastname}}. Have a good {{daytime}} {{name}}!'
    ];

    const template = templates[data.template_id];

    const content = data.content;

    let finalText = template;

    Object.keys(content).forEach(function(key,index) {
      const placeholder = `{{${key}}}`;
      finalText = finalText.replaceAll(placeholder, content[key]);
    });

    return finalText;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
