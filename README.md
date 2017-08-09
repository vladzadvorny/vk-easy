# vk-easy

## Что делает?

Сей велосипед представляет из себя простую Promise-based обёртку для методов VK API.

## Как использовать?
```
npm install vk-easy
```
```javascript
const api = require('vk-easy');

api('users.get', {
  user_ids: 1
}).then(console.log);
```

По умолчанию используется "POST". Для взаимодействия посредством метода "GET", укажите третий параметр:

```javascript
api('users.get', {
    user_ids: 1,
    v: '5.62'
  }, true
).then(console.log);
```