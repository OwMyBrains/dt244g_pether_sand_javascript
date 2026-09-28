"use strict";

/*Uppgift 7 
Skapa en array med minst sex tal.
Skapa därefter en funktion som tar emot en array som parameter och räknar ut summan av alla talen i arrayen.
Funktionen ska returnera summan.
Anropa funktionen med din array och skriv ut eller returnera resultatet.
Exempel:
Summan är 42
Använd en loop för att gå igenom arrayens innehåll.
Tänk på att funktionen ska fungera även om arrayen innehåller andra värden, eller olika många värden. 
Pether Sand 2026*/

//Array with numbers

function calculateSum(number) {
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
}
console.log(calculateSum([10, 20, 43, 123, 19, 90, 80, 56]));
