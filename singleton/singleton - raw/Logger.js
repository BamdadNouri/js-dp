class Logger{

    constructor(){
        this.logs = []
    }

    countLogs(){
        return this.logs.length
    }

    log(logMessage){
        const timeStamp = new Date().toISOString()
        this.logs.push({logMessage, timeStamp})
        console.log(`${timeStamp} - ${logMessage}`)
    }
}

module.exports = Logger







