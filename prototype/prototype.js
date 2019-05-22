class Order{

    constructor(id){
        this.shoppingList = []
        this.id = id
    }

    addItemToShoppingList(item){
        this.shoppingList.push(item)
    }

    clone(){
        var proto = Object.getPrototypeOf(this)
        var cloned = Object.create(proto)

        cloned.shoppingList = [...this.shoppingList]

        return cloned
    }
}
/*
var incommingOrder = new Order(17657)
incommingOrder.addItemToShoppingList('burger')
incommingOrder.addItemToShoppingList('fries')
incommingOrder.addItemToShoppingList('wings')

incommingOrder.addItemToShoppingList('fried chicken')
incommingOrder.addItemToShoppingList('coca cola')

var incommingOrder2 = new Order(47898)
incommingOrder2.addItemToShoppingList('burger')
incommingOrder2.addItemToShoppingList('fries')
incommingOrder2.addItemToShoppingList('wings')

incommingOrder2.addItemToShoppingList('salad')
incommingOrder2.addItemToShoppingList('soda')


*/

var proto = new Order()
proto.addItemToShoppingList
proto.addItemToShoppingList('burger')
proto.addItemToShoppingList('fries')
proto.addItemToShoppingList('wings')



var incommingOrder = proto.clone()
incommingOrder.id = 17657

incommingOrder.addItemToShoppingList('fried chicken')
incommingOrder.addItemToShoppingList('coca cola')


var incommingOrder2 = proto.clone()
incommingOrder2.id = 47898

incommingOrder2.addItemToShoppingList('salad')
incommingOrder2.addItemToShoppingList('soda')

console.log(`Order ${incommingOrder.id}: ${incommingOrder.shoppingList}`)
console.log(`Order ${incommingOrder2.id}: ${incommingOrder2.shoppingList}`)











