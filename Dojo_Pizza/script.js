 function pizzaOven(crustType, sauceType, cheeses, toppings){

    let pizza = {};

    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}

let pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["mustard", "fried onions", "arugala"]);
let pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "fetta"], ["mushrooms", "olives", "onions"]);
let pizza3 = pizzaOven("cheesy crust", "alfredo sauce", "pepperjack", ["onions", "pepperoni","steak"]);
let pizza4 = pizzaOven("thin", "spicy","cheddar", ["pepper","olives","bacon"]);

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4); 


function randomPizza(){
    let pizza = {};

    const ingredients = {
        "crusts" : ["thin crust", "stuffed crust", "cheesy crust", "deep dish", "hand tossed"],
        "sauces" : ["traditional", "marinara", "alfredo sauce", "spicy"],
        "cheeses" : ["cheddar","mozzarella","feta","pepperjack","goatcheese"],
        "toppings" : ["pepperoni", "bacon", "bannana pepper", "mushrooms", "onions"]
        }

    let topping = [];

        for(const index in ingredients){
            let i = Math.floor(Math.random() * ingredients[index].length);
            topping.push(ingredients[index][i]);   
        }

    pizza.crustType = topping[1];
    pizza.sauceType = topping[2];
    pizza.cheeses = topping[3];
    pizza.toppings = topping[4];

    console.log(pizza)
    return pizza;
};  