class insertCard{
    
    do(){
        console.log('Reding card info...')
    }
}
class insertPin{
    
    do(){
        console.log('Checking the password...')
    }
}
class requestCash{
    
    do(){
        console.log("I'm gonna give you some money.")
    }
}
class ejectCard{
    
    do(){
        console.log('Ejecting the card...')
    }
}

class ATM{

    constructor(){
        this.states = [new insertCard(), new insertPin(), new requestCash(), new ejectCard()]
        this.current = this.states[0]
    }

    changeState(){
        
        if(this.states.indexOf(this.current) < this.states.length - 1){
            this.current = this.states[this.states.indexOf(this.current) + 1]
        }else{
            this.current = this.states[0]
        }
        this.current.do()
    }
}

var atm = new ATM()

atm.changeState()



