//var logger = require('./Logger)
var Logger = require('./Logger')
var User = require('./User')
var Store = require('./Store')

var logger = new Logger().getInstance()
logger.log(`Starting the app...`)

var bikeShop = new Store('Bike Shop', 1000)
var theUser = new User('the user')

logger.log('Finished setup...')

console.log(`Total logs: ${logger.countLogs()}`)
logger.logs.map(log => console.log(log.logMessage))