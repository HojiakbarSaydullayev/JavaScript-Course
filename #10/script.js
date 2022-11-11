"use strict";

//<<<<<<<<<<<<<<<<<<< Operatorlar >>>>>>>>>>>>>>>>>>>> //

// incr, decr

let incr = 10;
let decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

// <<<<<<<< prefix >>>>>>>>>> // 1-yo'l

let incrr = 20;
let decrr = 20;

console.log(incrr++);
console.log(decrr--);

console.log(incrr++);
console.log(decrr--);

console.log(incrr);
console.log(decrr);

// <<<<<<<< prefix >>>>>>>>>> // 2-yo'l

let incrrr = 30;
let decrrr = 30;

console.log(++incrrr);
console.log(--decrrr);

// %  => sonning qoldigini topib beradi !

const qoldiq = 5 % 2; // qoldiq 1
console.log(qoldiq);

const qoldiQ = 17 % 3; // qoldiq 2
console.log(qoldiQ);

// ==  --> tenglash qiymati

const teng = 6 * 6 == 36; // true
console.log(teng);

const qiymat = 5 * 5 == "25"; // true
console.log(qiymat);

// === -->  qiymati va malumot turini ham tenglash !

const qiymatMalumot = 5 * 5 === "25"; // false
console.log(qiymatMalumot);

const qiyMal = 7 * 7 === 49; // true
console.log(qiyMal);

// && => va ---> bu belgidan foydalanganda "hammasi" 'true' bolishi kerak ! Natija "true" bo'lishi uchun

const isAge = true;
const isMerried = true;
const issingle = true;

console.log(isAge && isMerried && issingle);

// || => yoki --->  bu belgidan foydalanganda "bir dona" bolsa ham  'true' bolishi kerak ! Natija "true" bo'lishi uchun

const isAgee = true;
const isMerriedd = false;
const isSingle = false;

console.log(isAgee || isMerriedd || isSingle);

// ! => bu belgi "true" - ni false ga | "false" - ni esa true ga o'zgartiradi.

const isRich = true;
const isBeauty = !false;

console.log(isRich && isBeauty);

//

const isChecked = !false;
const isLong = false;
console.log(isChecked || isLong);

//

console.log(5 * 5 + 4 / 4 != 26); // false
console.log(5 * 5 + 4 / 4 !== 26); // false
console.log(5 * 5 + 4 / 4 != "26"); // false
console.log(5 * 5 + 4 / 4 !== "26"); // true
