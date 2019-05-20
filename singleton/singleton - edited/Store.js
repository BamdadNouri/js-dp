//var logger = require('./Logger)
var Logger = require('./Logger')
var logger = new Logger().getInstance()

class Store{
    constructor(storeName, money=0){
        this.name = storeName
        this.money = money

        logger.log('New store created.')
    }
}

module.exports = Store



