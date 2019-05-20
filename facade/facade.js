class PlayMusic{

    play(type){
        //fetch('api.spotify.com/v1/search?playlist=' + type)...
        console.log(`Playing some ${type} music.`)
    }

    pause(){
        console.log('Pause the music.')
    }
}

class LightingSystem{

    turnOn(){
        console.log('Turning on the lamps...')
    }
    dim(){
        console.log(`Dimming the lights...`)
    }
    //...
    turnOff(){
        console.log('Turning off the lamps...')
    }
}

class Alarm{

    setAlarm(time){
        console.log(`Alarm is set for ${time}.`)
    }

    removeAlarm(time){
        console.log(`${time} alarm is removed.`)
    }
}

class PhoneBrightness{

    increaseBrightness(level){

        console.log(`Brightness is increased to level ${level}.`)
    }

    reduceBrightness(level){

        console.log(`Brightness is reduced to level ${level}.`)
    }
}

/*
var musicPlayer = new PlayMusic()
musicPlayer.play('sleeping')

var lighting = new LightingSystem()
lighting.dim()

setInterval(() => {
    lighting.turnOff()
}, 1000*60*30)

var alarm = new Alarm()
alarm.setAlarm('7 am')

var brightness = new PhoneBrightness()
brightness.reduceBrightness(6)
*/

class Assistant{

    goodNightCommand(){
        var musicPlayer = new PlayMusic()
        var lighting = new LightingSystem()
        var alarm = new Alarm()
        var brightness = new PhoneBrightness()

        musicPlayer.play('sleeping')
        lighting.dim()
        alarm.setAlarm('7 am')
        brightness.reduceBrightness(6)

    }

    goodMorningCommand(){
        var musicPlayer = new PlayMusic()
        var lighting = new LightingSystem()
        var brightness = new PhoneBrightness()

        musicPlayer.play('fun morning')
        lighting.turnOn()
        brightness.increaseBrightness(8)
    }
}

var assistant = new Assistant()
assistant.goodNightCommand()
console.log('<----------------------------------->')
assistant.goodMorningCommand()