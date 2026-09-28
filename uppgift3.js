"use strict";

/* Uppgift 3
Skapa en variabel age som innehåller en valfri ålder.
Använd if, else if och else för att skriva ut ett meddelande beroende på åldern:
under 18 år: "Barn"
18–64 år: "Vuxen"
65 år eller äldre: "Pensionär"
Testa programmet med flera olika åldrar så att du ser att samtliga grenar fungerar.
Pether Sand 2026 */

/* variable */
let age = 43;
/* meddelande för vilken åldersgrupp man ingår i */
if (age <= 17) {
  console.log("Barn");
} else if (age >= 65) {
  console.log("Pensionär");
} else {
  console.log("Vuxen");
}
/* Har testat olika åldrar och det har fungerat som det ska */
