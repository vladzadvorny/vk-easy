const rp = require('request-promise');

module.exports = (method, params, get) => {
  get = get || false;
  params.v = params.v || '5.67';

  return get
    ? rp({
        uri: `https://api.vk.com/method/${method}`,
        qs: params,
        json: true
      })
    : rp({
        method: 'POST',
        uri: `https://api.vk.com/method/${method}`,
        formData: params,
        json: true
      });
};
