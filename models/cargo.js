const { timestamp, serialInt } = require('funx-js')

class Cargo {

    constructor(){
        this.isCargo = true
        this.serial = serialInt("00000")
        this.createdAt = timestamp()
        this.status = 200
        this.isVisible = false
    }

    detailsTo(details){
        this.details = details
        return this
    }

    payloadTo(payload){
        this.payload = payload
        return this
    }

    statusTo(status){
        this.status = status
        return this
    }

    visible(){
        this.isVisible = true
        return this
    }

    directive(directive){
        if(!this.directives) this.directives = []
        this.directives.push(directive)
        return this
    }
}

module.exports = Cargo