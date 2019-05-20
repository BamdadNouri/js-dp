class Burger{

    constructor(){
        this.ingredients = 'Burger bun, Beef'
        this.price = 16000
    }

    getPrice(){
        return this.price
    }

    getIngredients(){
        return this.ingredients
    }

    describeBurger(){
        return `This burger has ${this.getIngredients().split(',').length} ingredients and it's made of "${this.getIngredients()}" and it costs ${this.getPrice()}.`
    }
}

function addKetchup(burger){
    var burgerIngredients = burger.getIngredients()
    burger.getIngredients = () => {
        return burgerIngredients + ', Ketchup'
    }

    var burgerPrice = burger.getPrice()
    burger.getPrice = () => {
        return burgerPrice + 3000
    }
}

function addCheese(burger){
    var burgerIngredients = burger.getIngredients()
    burger.getIngredients = () => {
        return burgerIngredients + ', Cheese'
    }

    var burgerPrice = burger.getPrice()
    burger.getPrice = () => {
        return burgerPrice + 5000
    }
}

function addMushroom(burger){
    var burgerIngredients = burger.getIngredients()
    burger.getIngredients = () => {
        return burgerIngredients + ', Mushroom'
    }

    var burgerPrice = burger.getPrice()
    burger.getPrice = () => {
        return burgerPrice + 4000
    }
}



var burger = new Burger()

console.log(burger.describeBurger())
console.log('<--------------------------------------------------------------------->')
addCheese(burger)
console.log(burger.describeBurger())
console.log('<--------------------------------------------------------------------->')
addKetchup(burger)
console.log(burger.describeBurger())
console.log('<--------------------------------------------------------------------->')
addMushroom(burger)
console.log(burger.describeBurger())
console.log('<--------------------------------------------------------------------->')
