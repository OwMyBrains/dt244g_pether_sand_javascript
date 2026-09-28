"use strict";
/* Uppgift 6
Skapa en funktion som räknar ut arean av en rektangel.
Funktionen ska:
heta calculateArea
ta emot bredd och höjd som parametrar
beräkna arean
returnera resultatet
Anropa därefter funktionen minst tre gånger med olika värden och skriv ut resultaten.
Exempel:
Arean är 20
Arean är 42
Arean är 100
Viktigt: Funktionen ska använda ett return-värde. Skriv alltså inte ut resultatet direkt inne i funktionen.
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
