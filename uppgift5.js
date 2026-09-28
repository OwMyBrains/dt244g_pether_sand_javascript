"use strict";

/* Uppgift 5
Skapa en array som innehåller minst fem valfria maträtter.
Programmet ska sedan:
1. skriva ut hela arrayen
2. skriva ut det första elementet
3. skriva ut det sista elementet
4. lägga till en ny maträtt sist i arrayen
5. ta bort den första maträtten i arrayen
6. skriva ut arrayen igen efter förändringarna
Använd lämpliga array-metoder för att genomföra förändringarna.

Exempel på metoder som kan vara användbara är push() och shift().
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
