# vk-easy

## Что делает?

Сей велосипед представляет из себя простую обёртку на основе Axios'а, для взаимодействия с методами VK API.

## Как использовать?
```
npm install vk-easy
```
```javascript
const vkEasy = require('vk-easy');

vkEasy('users.get', {
  user_ids: 1
})
  .then(data => data.data)
  .then(console.log);
```

По умолчанию используется метод "POST". Для взаимодействие посредством метода "GET" указывается третий необязательный параметр:

```javascript
vkEasy('users.get', {
  user_ids: 1,
  v: '5.62'
}, true)
  .then(data => data.data)
  .then(console.log);
```

Остальное смотреть в коде. Там его немного.