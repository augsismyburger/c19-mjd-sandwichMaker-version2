"use strict";


let Sandwich = require('./SandwichMaker');


let veggieChoices = {
    "lettuce" : .50,
    "peppers" : 1.00,
    "onions" : .50,
    "tomato" : .50
};

let veggiePrice = 0;
let veggieSelection = "";
let addVeggies = function(veggieArray) {
    for (let i = 0; i < veggieArray.length; i++) {
            veggieSelection += veggieArray[i] + " ";
            veggiePrice += veggieChoices[veggieArray[i]];


    };
    // console.log(veggieSelection, veggiePrice);
    Sandwich.addCost(veggiePrice);
    Sandwich.writeVeggies(veggieSelection);
};

module.exports = {addVeggies};
