var vkEasy = require('./index');
var expect = require('chai').expect;

it('post', () => {
  var response = [{ id: 1, first_name: 'Павел', last_name: 'Дуров' }];

  return vkEasy('users.get', {
    user_ids: 1
  })
    .then(data => data.data)
    .then(data => {
      expect(data.response).to.deep.equal(response);
    });
});

it('get', () => {
  var response = [{ id: 1, first_name: 'Павел', last_name: 'Дуров' }];

  return vkEasy(
    'users.get',
    {
      user_ids: 1,
      v: '5.62'
    },
    true
  )
    .then(data => data.data)
    .then(data => {
      expect(data.response).to.deep.equal(response);
    });
});
