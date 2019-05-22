var module = (function(){

    var privateVar = 12,
        anotherPrivateVar = "I'm private :)",
        publicVar = "And I'm public."

    function privateFunction(){
        console.log('This function is private.')
    }

    function publicFunction(){
        console.log('And this one is public.')
    }

    return{
        publicVar: publicVar,
        publicFunction: publicFunction
    }
})();

console.log(module.privateVar) // undefined
console.log(module.publicVar)
module.publicFunction()
//module.privateFunction() //type error










