"use strict";

let Sandwich = require('./SandwichMaker');


var condyChoices = {
    "mayo" : 1.00,
    "mustard" : 1.00,
    "oil & vinegar" : 1.00,
    "lard" : 2.00
};

var condyPrice = 0;
var condySelection = "";
let addCondys = function(condyArray) {
    for (let i = 0; i < condyArray.length; i++) {
            condySelection += condyArray[i] + " ";
            condyPrice += condyChoices[condyArray[i]];


    };
    // console.log(condySelection, condyPrice);
    Sandwich.addCost(condyPrice);
    Sandwich.writeCondys(condySelection);
};

module.exports = {addCondys};
