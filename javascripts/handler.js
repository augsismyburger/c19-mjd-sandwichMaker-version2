"use strict"

let Bre = require('./bread');
let Mea = require('./meat');
let Che = require('./cheese');
let Veg = require('./veggie');
let Con = require('./condys');

let handle = function() {
    // GATHERING EVENT HANDLERS

    $('#make-sandwich-button').click(function() {
        // BREAD STUFF
        var bread = $('#bread-choice')[0].value;
        Bre.addBread(bread);
        // MEAT STUFF
        var meats = $("input[name='meats']");
        var meatArray = [];
        meats.each(function(i) {
            if (meats[i].checked === true) {
                meatArray.push(meats[i].value);
            }
        });
        Mea.addMeat(meatArray);
        // CHEESE STUFF
        var cheese = $("input[name='cheese']");
        var cheeseArray = [];
        cheese.each(function(i) {
            if (cheese[i].checked === true) {
                cheeseArray.push(cheese[i].value);
            }
        });
        Che.addCheese(cheeseArray);
        // VEGGIE STUFF
        var veggies = $("input[name='veggies']");
        var veggiesArray = [];
        veggies.each(function(i) {
            if (veggies[i].checked === true) {
                veggiesArray.push(veggies[i].value);
            }
        });
        Veg.addVeggies(veggiesArray);
        // CONDIMENT STUFFS
        var condys = $("input[name='condys']");
        var condyArray = [];
        condys.each(function(i) {
            if (condys[i].checked === true) {
                condyArray.push(condys[i].value);
            }
        });
        Con.addCondys(condyArray);
    });
};

module.exports = {handle};
