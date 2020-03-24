# Notis
### 1.  Defining a new Schema
schema.js
```js
const { Schema } = require('notis')

const schema = new Schema()

schema.create('welcome', {
    en: () => `hello there!`,
    zh: () => `你好!`
})

schema.create('invalid', {
    en: (noun) => `invalid ${noun}!`,
    zh: noun => `${noun}有误!`
})

module.exports = schema
```

### 2.  Merge Schemas
```js
const schema = new Schema({
    exampleSchemaOne,
    exampleSchemaTwo,
})

const { Schema } = require('notis')

const schema = new Schema()

schema.create('welcome', {
    en: () => `hello there!`,
    zh: () => `你好!`
})

schema.create('invalid', {
    en: (noun) => `invalid ${noun}!`,
    zh: noun => `${noun}有误!`
})

module.exports = schema.export()
```