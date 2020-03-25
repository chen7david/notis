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
const schema = require('./schema')
const { notis } = require('notis')(schema)

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

```

output

```js

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

```

output:

```js

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

```

output:

```js

validation: {
  state: 'validation',
  lang: 'zh',
  messages: [
    { message: '你好some-name!', key: 'username' },
    { message: 'some-password有误!', key: 'password' }
  ]
}
```

### 7. Express Middleware Example


```js
const schema = require('notis-schema')()
const notis = require('notis')(schema)

// mount on express app
app.use(notis())

```

#### note()


```js
// accessing in express route

const SomeExpressRoute = async (req, res, next) => {
    
    const message = req.note('invalid', 'username')
    
    next()
}

```


#### alert()

```js
// accessing in express route

const SomeExpressRoute = async (req, res, next) => {
    
    const alert = req.alert('required', 'verification', [
        {
            label:'click here to verify your account',
            url:'/account/verification/:some-user-id'
        }
    ])
    
    next()
}

```


#### validation()

```js
// accessing in express route

const SomeExpressRoute = async (req, res, next) => {
    
    const instance = req.validation()
    
    for(let errof errors){
        instance.laod(err.name, err.label, err.key)
    }

    validationErrorMessages = instance.render()
    
    next()
}

```