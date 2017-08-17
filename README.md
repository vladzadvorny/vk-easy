# vk-easy

[![NPM Version](https://img.shields.io/npm/v/vk-easy.svg)](https://www.npmjs.com/package/vk-easy)
[![NPM Download](https://img.shields.io/npm/dm/vk-easy.svg)](https://www.npmjs.com/package/vk-easy)
[![License](https://img.shields.io/npm/l/vk-easy.svg)](https://github.com/vladzadvorny/vk-easy/blob/master/LICENSE)

Сей велосипед представляет из себя простую Promise-based обёртку для методов VK API.

## Установка:

```
npm install vk-easy
```

## Использование:

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