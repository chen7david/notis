const fs = require('fs')
const path = require('path')

const combine = (...folderPath) => {
    
    const modules = {}
    const folder = path.join(...folderPath)
    const files = fs.readdirSync(folder)

    for(let file of files){
        if(file.indexOf(".js") > -1 && file != 'joined.js')
        // modules[file.replace(/\.js/, '')] = require(path.join(folder,file))
        Object.assign(modules, require(path.join(folder,file)))
    }

    return modules
}

module.exports = () => combine(__dirname)