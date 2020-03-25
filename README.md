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
const { exampleSchemaOne, exampleSchemaTwo } = require('./notis-example-schemas')

const schema = new Schema({
    exampleSchemaOne,
    exampleSchemaTwo,
})

module.exports = schema
```

### 3. Initialize Notis
```js
const schemas = require('./schemas')
const notis = require('notis')(schemas)

const { note, alert, validation } = notis({
    lang: 'zh',
    timeout: 30
})
```

### 4. note()
note returns a message obeject. 

```js
const inform = note('names','david', 'info')

console.log(inform)

// output

inform: { 
    state: 'info', 
    lang: 'zh', 
    timeout: 30, 
    message: '你好david!'
}
```
### 5. alert()
alerts returns an object that has one or more buttons
```js
const action = alert('names','david', [
    {
        label:'verify',
        url: '/users/action/activate'
    }
])

// output

action: {
  state: 'alert',
  lang: 'zh',
  timeout: 0,
  message: '你好david!',
  actions: [ 
      { 
        label: 'verify', 
        url: '/users/action/activate' 
      }
   ]
}
```


### 6. validation
alerts is an object that has a load() and render() method.
```js

for(let item of list){
    const {code, data, label} = item
    validation.load(code, data, label)
}

console.log(validation.render())

// output

validation: {
  state: 'validation',
  lang: 'zh',
  messages: [
    { message: '你好some-name!', key: 'username' },
    { message: 'some-password有误!', key: 'password' }
  ]
}
```

Express Middleware Example
```js
const { Schema } = require('notis')
const schema = new Schema(require('notis-schema'))
const notis = require('notis')(schema)

module.exports = {
    tools: (req, res, next) => {
        if(!req.tools) req.tools = {}

        const { note, alert, validation } = notis({ lang: 'zh' })

        req.tools.note = note
        req.tools.alert = alert
        req.tools.validation = validation
        
        next()
    },
}
```