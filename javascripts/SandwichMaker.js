"use strict";



let totalPrice = 0;
let addCost = function(price) {
    totalPrice += price;
    // console.log(totalPrice);
    $('#finished-sandwich')[0].innerHTML = `<h4>The total cost of your goddamn sammich is $<em>${totalPrice}</em></h4>`;
};
let writeBread = function(bread) {
     $('#bread-spot')[0].innerHTML = `<h5>Your sammich has ${bread} bread.</h5>`;
};
let writeMeat = function(meats) {
     $('#meat-spot')[0].innerHTML = `<h5> It's stuffed with ${meats}.</h5>`;
};
let writeCheese = function(cheeses) {
     $('#cheese-spot')[0].innerHTML = `<h5> It's layered with ${cheeses} cheese.</h5>`;
};
let writeVeggies = function(veggies) {
     $('#veggie-spot')[0].innerHTML = `<h5> It's topped with ${veggies}.</h5>`;
};
let writeCondys = function(condys) {
     $('#condy-spot')[0].innerHTML = `<h5> It's splattered with ${condys}. YUM YUM YUM.</h5>`;
};

let Sandwich = {
    addCost, writeBread, writeMeat, writeCheese, writeVeggies, writeCondys
};


module.exports = Sandwich;
