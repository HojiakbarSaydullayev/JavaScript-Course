"use strict";

// <<<<<<<<<<<<<<<< interpolatsiya => `${}` >>>>>>>>>>>>> //

const yChannel = prompt("What's your favorite youtuber ?");
console.log("https://youtube.com/channel/" + yChannel); // oddiy

const channel = prompt("What's your favorite youtuber ?");
console.log(`https://youtube.com/${channel}`); // interpolatsiya

const user = "Hojiakbar";
const job = "JavaScript developer";

console.log(`User name is ${user}, he is ${job}`);
