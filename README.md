# Notis
### 1.  Defining a new Schema
schema.js
```js
module.exports = {

    /* CRUD */ 

    created: (noun) =>`successfully created new ${noun}!`,
    create_failed: (noun) =>`faild to create new ${noun}!`,
    updated: (noun) =>`successfully updated ${noun}!`,
    update_faild: (noun) =>`faild to update ${noun}!`,
    deleted: (noun) =>`successfully deleted ${noun}!`,
    delete_faild: (noun) =>`faild to delete ${noun}!`,
}
```

### 2. Initialize Notis
```js
const { Notis, schema, notisexpress } = require('notis')

const notis = new Notis(schema.join())

```

### 3. note()
note returns a message obeject. 

```js
const inform = notis('names','david', 'info')

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

### 4. validation
alerts is an object that has a load() and render() method.
```js

for(let item of list){
    const {code, data, label} = item
    notis.load(code, data, label)
}

console.log(validation)

```

- output:

```js

validation: {
  state: 'validation',
  messages: [
    { message: '你好some-name!', key: 'username' },
    { message: 'some-password有误!', key: 'password' }
  ]
}
```

### 5. Express Middleware Example

**Note:** if you wish to set the langue you will have set a lang property on your request object before instantiating notis.

```js

// mount on express app
// app.use(config) this route is used to set req.lang to your lang choice on each request.
app.use(notisexpress(schema.joi))

```

#### - note()


```js
// accessing in express route

const SomeExpressRoute = async (req, res, next) => {
    
    const message = req.notis('invalid', 'username')
    
    next()
}

```

- output:

```js

{
  state: 'error',
  lang: 'en',
  timeout: 6000,
  message: 'invalid username!'
}

```

#### - validation()

```js
// accessing in express route

const SomeExpressRoute = async (req, res, next) => {
    
    
    for(let errof errors){
        req.notis.laod(err.name, err.label, err.key)
    }
    
    next()
}

```

- output:

```js

{
  state: 'validation',
  messages: [
    { message: 'some validation message', key: 'username' },
    { message: 'some other validation message', key: 'password' }
  ]
}
```