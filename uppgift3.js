"use strict";

/* Uppgift 3
Program som kontrollerar ålder på en person och skriver sedan ut vilken åldersgrupp personen tillhör
Pether Sand 2026 */

// variable
let age = 43;

// meddelande för vilken åldersgrupp man ingår i
if (age <= 17) {
  console.log("Barn");
} else if (age >= 65) {
  console.log("Pensionär");
} else {
  console.log("Vuxen");
}
// Har testat olika åldrar och det har fungerat som det ska
