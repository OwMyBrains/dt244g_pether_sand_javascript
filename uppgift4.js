"use strict";
/* Uppgift 4
Skriv ett program som skriver ut alla heltal från 1 till 20.
Använd en for-loop för att lösa uppgiften.
Utskriften ska exempelvis börja:
1
2
3
4
5
...
20
Ändra därefter programmet så att endast talen som är jämna skrivs ut.
Tips: Modulus-operatorn kan vara användbar här (%).
Du ska alltså använda loop och villkor tillsammans.
Pether Sand 2026 */

/* 
Räkna från 1-20
for (var i = 1; i <= 20; i++) {
  console.log(i);
} */

/*  Skriver ut ojämna nummer
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
} */
/*  Skriver ut jämna nummer */
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
