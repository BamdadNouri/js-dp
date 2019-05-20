const fs = require('fs')

class localStorage{

    constructor(){
        if(fs.existsSync('localStorage.json')){
            console.log('Loading localStorage data...')
            var context = fs.readFileSync('localStorage.json')
            this.items = JSON.parse(context)
        }else{
            this.items = {}
        }
    }

    get length(){
        return Object.keys(this.items).length
    }

    getItem(key){
        return this.items[key]
    }

    setItem(key, value){
        this.items[key] = value
        fs.writeFile('localStorage.json', JSON.stringify(this.items), error => {
            if(error){
                console.log('ERROR: ' + error)
            }
        })
    }

    clear(){
        this.items = {}
        fs.unlink('localStorage.json', () => {
            console.log('localStorage cleared.')
        })
    }
}

module.exports = new localStorage()





