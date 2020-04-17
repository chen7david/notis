
const Notis = require('./models/notis')
const joi = require('./schema/joi')
const _default = require('./schema/default')
const join = require('./schema/joined')

const dd = (val) => console.log(val)

module.exports = {
    notis: (schema) => new Notis(schema),
    notisexpress: (schema) => (req, _, next) => {
        req.notis = new Notis(schema)
        next()
    },
    schema: {
        joi,
        default:_default,
        join 
    }
}

const notis = new Notis(_default)
notis.load('duplicate', 'route', 'warning')
dd(notis.load('forbidden', 'route', 'info'))