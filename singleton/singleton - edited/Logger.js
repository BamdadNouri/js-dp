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
//Logger.js

class Singleton{

    constructor(){
        if(!Singleton.instance){
            Singleton.instance = new Logger()
        }
    }

    getInstance(){
        return Singleton.instance
    }
}

module.exports = Singleton

//module.exports = new Logger()



