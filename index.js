const Notis = require('./models/notis')
const joi = require('./schema/joi')
const generic = require('./schema/generic')
const join = require('./schema/joined')

module.exports = {

    Notis,
    
    notisexpress: (schema) => (req, _, next) => {
        req.notis = new Notis(schema)
        next()
    },

    schema: {
        joi,
        generic,
        join 
    }
}
