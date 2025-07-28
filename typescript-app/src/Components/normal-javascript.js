const menu = [
    { name: 'beef', price: 10 },
    { name: 'chicken', price: 8 },
    { name: 'magarita', price: 12 },
    { name: 'pepperoni', price: 7 },
        
]
const cashInHand = 100;

const orderQueue = []

function addNewPizza (pizzaObj){
  menu.push(pizzaObj);
}

function orderPizza (pizzaName, quantity) {
  const pizza = menu.find(p => p.name === pizzaName);
  if (!pizza) {
    console.log(`Sorry, we don't have ${pizzaName} on the menu.`);
    return;
  }
  
  const totalCost = pizza.price * quantity;
  if (totalCost > cashInHand) {
    console.log(`You don't have enough cash to order ${quantity} ${pizzaName}(s).`);
    return;
  }
  
  cashInHand -= totalCost;
  orderQueue.push({ pizza: pizzaName, quantity });
  console.log(`Ordered ${quantity} ${pizzaName}(s). Remaining cash: $${cashInHand}.`);
}