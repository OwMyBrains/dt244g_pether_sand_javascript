"use strict";
/* Lösning till uppgift 6, program som räknar ut arean utifrån 2 st nummer. 
Pether Sand 2026
 */

//Funktion för uträkningen
function calculateArea(a, b) {
  return a * b;
}

//Värden i uträkningen
let area1 = calculateArea(60, 1.5);
let area2 = calculateArea(100, 4);
let area3 = calculateArea(20, 3);
//Utskriften;
console.log(`Arean är ${area1}`);
console.log(`Arean är ${area2}`);
console.log(`Arean är ${area3}`);
