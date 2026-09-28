"use strict";

/* Lösning till uppgift 5, program som skriver ut en array med maträtter,
Pether Sand 2026 */

let food = [
  "Pizza",
  "Palak Paneer",
  "Ramen",
  "Pasta Carbonara",
  "Hamburgare med klyftpotatis",
];
console.log(food);
console.log(food[0]);
console.log(food[4]);

food.push("Kycklingwok");
console.log(food);

food.shift();
console.log(food);
