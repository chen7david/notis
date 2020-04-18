class Notis {
    constructor(schema){
        this.state = 'error'
        this.schema = schema
    }

    keys(){
        return Object.keys(this.schema)
    }

    render(key, data){
        return this.schema[key](data)
    }

    persist(){
        this.timeout = 0
        return this
    }

    build(key, data, state = null){
        if(state) this.state = state
        this.timeout = 6000
        this.message = this.render(key, data)
        return this
    }

    load(code, data, key){
        if(!this.messages) this.messages = []
        this.state = 'validation'
        this.messages.push({
            key,
            message: this.render(code, data)
        })
        return this
    }

    toJSON(){
        delete this.schema
        return this
    }
}

module.exports = Notis