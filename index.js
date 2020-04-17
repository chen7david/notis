const Notis = require('./models/notis')
const Cargo = require('./models/notis')
const joi = require('./schema/joi')
const generic = require('./schema/generic')
const join = require('./schema/joined')

module.exports = {

    Notis,

    Cargo,

    notisexpress: (schema) => (req, _, next) => {
        req.notis = new Notis(schema)
        next()
    },

    cargoexpress: () => (req, _, next) => {
        req.cargo = new Cargo()
        next()
    },

    schema: {
        joi,
        generic,
        join 
    }
}
