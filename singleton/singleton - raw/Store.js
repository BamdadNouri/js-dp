var Logger = require('./Logger')
var logger = new Logger()

class Store{
    constructor(storeName, money=0){
        this.name = storeName
        this.money = money

        logger.log('New store created.')
    }
}

module.exports = Store






