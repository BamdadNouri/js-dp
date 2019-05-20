var Logger = require('./Logger')
var logger = new Logger()

class User{
    constructor(name){
        this.name = name

        logger.log(`New user added.`)
    }
}

module.exports = User






