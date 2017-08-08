# vk-easy

## Что делает?

Сей велосипед представляет из себя простую обёртку на основе Axios'а, для методов VK API.

## Как использовать?
```
npm install vk-easy
```
```javascript
const api = require('vk-easy');

api('users.get', {
  user_ids: 1
})
  .then(data => data.data)
  .then(console.log);
```

По умолчанию используется "POST". Для отправки методом данных "GET", укажите третий параметр:

```javascript
api('users.get', {
  user_ids: 1,
  v: '5.62'
}, true)
  .then(data => data.data)
  .then(console.log);
```