const api = require('./index');
const expect = require('chai').expect;
const response = [{ id: 1, first_name: 'Павел', last_name: 'Дуров' }];

it('post', () => {
  return api('users.get', {
    user_ids: 1
  }).then(data => {
    expect(data.response).to.deep.equal(response);
  });
});

it('get', () => {
  return api(
    'users.get',
    {
      user_ids: 1,
      v: '5.62'
    },
    true
  ).then(data => {
    expect(data.response).to.deep.equal(response);
  });
});
