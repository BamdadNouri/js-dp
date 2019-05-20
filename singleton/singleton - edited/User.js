//var logger = require('./Logger)
var Logger = require('./Logger')
var logger = new Logger().getInstance()

class User{
    constructor(name){
        this.name = name

        logger.log(`New user added.`)
    }
}

module.exports = User