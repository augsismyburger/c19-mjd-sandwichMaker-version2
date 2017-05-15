"use strict";

let Sandwich = require('./SandwichMaker');


let meatChoices = {
    "turkey" : 3.00,
    "capicolla" : 4.00,
    "lamb" : 3.50,
    "pancetta" : 4.00
};
let meatPrice = 0;
let meatSelection = "";
let addMeat = function(meatsArray) {
    for (let i = 0; i < meatsArray.length; i++) {
            meatSelection += meatsArray[i] + " ";
            if (i < 1) {
                meatPrice += meatChoices[meatsArray[i]];
            } else if (i = meatsArray.length) {

            };

    };
    // console.log(meatSelection, meatPrice);
    Sandwich.addCost(meatPrice);
    Sandwich.writeMeat(meatSelection);
};

module.exports = {addMeat};
