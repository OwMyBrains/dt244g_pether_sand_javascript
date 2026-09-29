"use strict";

/* Uppgift 5
Program som använder en array med maträtter, dessa skrivs ut i olika former, maträtter läggs till eller tas bort.
Pether Sand 2026 */

//Array med maträtter
let food = [
  "Pizza",
  "Palak Paneer",
  "Ramen",
  "Pasta Carbonara",
  "Hamburgare med klyftpotatis",
];

//Skriver ut alla, första och sedan sista maträtten
console.log(food);
console.log(food[0]);
console.log(food[4]);

//lägger till en maträtt och skriver ut alla
food.push("Kycklingwok");
console.log(food);

//Tar bort en maträtt och skriver ut alla en sista gånt
food.shift();
console.log(food);
