"use strict";

let Sandwich = require('./SandwichMaker');

let breadChoices = {
    "wheat" : 3.00,
    "rye" : 3.00,
    "cheesy" : 3.00,
    "italian" : 3.00
};
let breadPrice = 0;
let breadType = "";
let addBread = function(bread) {
    breadType = bread;
    breadPrice = breadChoices[bread];
    console.log(breadType, breadPrice);
    Sandwich.addCost(breadPrice);
    Sandwich.writeBread(breadType);
};

module.exports = {addBread};
