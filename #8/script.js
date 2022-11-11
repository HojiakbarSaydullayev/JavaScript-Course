"use strict";

alert("Hello JavaScript");

const place = confirm("Are you here ?");
console.log(place);

const sConfirm = confirm("How are you ?");
console.log(sConfirm);

const currentPlace = prompt("Where are you ?", "Khoji");
console.log(typeof currentPlace);

const pLanguage = prompt("N1 JavaScript ?", "Yes, ");
console.log(pLanguage);

// barcha inputlar string malumot qaytaradi ! Ular ni number ga aylantirish
// uchun oldiga "+" ishorasi qo'yiladi.
// const age = +prompt("How old are you ?", "18");
// console.log(age);

const favoriteColor = [];
favoriteColor[0] = prompt("What is your favorite color #1 ?", "");
favoriteColor[1] = prompt("What is your favorite color #2 ?", "");
favoriteColor[2] = prompt("What is your favorite color #3 ?", "");

console.log(typeof favoriteColor);

// <<<<<<<<< ! Massive malumot turi "Object" ga teng >>>>>>>>>>>> //

const fCars = [];
fCars[0] = prompt("What's your favorite car ?", "");
fCars[1] = prompt("What's your favorite car ?", "");
fCars[2] = prompt("What's your favorite car ?", "");

console.log(fCars);
