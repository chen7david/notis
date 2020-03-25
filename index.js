const { isObject } = require('funx-js')

class Schema {
    constructor(schemas){
        this.lang = 'en'
        this.store = {}
        this.state = 'error'
        if(schemas) this.merge(schemas)
    }

    merge(schemas){
        if(!isObject(schemas)) throw(`schemas must be of type object!`)
        const schemaKeys = Object.keys(schemas)
        for(let schemaKey of schemaKeys){
            let schema = schemas[schemaKey]
            schema = schema.export()
            let schemaNames = Object.keys(schema)
            for(let schemaName of schemaNames){
                this.create(schemaName, schema[schemaName])
            }
        }
    }

    keys(){
        return Object.keys(this.store)
    }

    create(name, defitition){
        if(this.exists(name)) throw(`"${name}" schema is already defined!`)
        if(!isObject(defitition)) throw(`defitition must be of type object!`)
        this.store[name] = defitition
        return this
    }

    render(key, data){
        const template = this.store[key]
        if(!template) throw(`"${name}" schema is not defined!`)
        return template[this.lang](data)
    }

    exists(key){
        return this.store[key] ? true : false
    }

    export(){
        return this.store
    }
}

class Validation {
    constructor(schema){
        this.state = 'validation'
        this.lang = schema.lang
        this.messages = []
        this.schema = schema
    }

    load(code, data, key){
        this.messages.push({
            message: this.schema.render(code, data),
            key
        })
        return this
    }
    render(){
        delete this.schema
        return this
    }
}

exports = module.exports = (schema) => (options) => {

    const { lang, state, timeout } = options

    if(lang) schema.lang = lang
    if(state) schema.state = state

    return {
        note: (key, data, state) => {
            return {
                state: state ? state : schema.state,
                lang: schema.lang,
                timeout: timeout ? timeout : 6000,
                message: schema.render(key, data)
            }
        },
        alert: (key, data, url) => {
            return {
                state: 'alert',
                lang: schema.lang,
                timeout: 0,
                message: schema.render(key, data),
                actions: url ? url : []
            }
        },
        validation(){
            return new Validation(schema)
        },
    }
}

exports.Schema = Schema
exports.Validation = Validation