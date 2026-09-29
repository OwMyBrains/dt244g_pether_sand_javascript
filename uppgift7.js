"use strict";

/*Uppgift 7 
Program som räknar ihop summan av ett antal nummer i en array.
Pether Sand 2026*/

//Funktion för att loopa igenom arrayen som skrivs senare
function calculateSum(number) {
  var sum = 0;
  for (var i = 0; i < number.length; i++) {
    sum += number[i];
  }
  //returnerar summan
  return sum;
}

//Utskriften inklusive arrayen som ska räknas ut.
console.log(
  `Summan av arrayen är ${calculateSum([10, 20, 43, 123, 19, 90, 80, 56])}`,
);
