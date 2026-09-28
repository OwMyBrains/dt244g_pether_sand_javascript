"use strict";

/* Uppgift 2
Du ska skapa två variabler. Den ena ska lagra priset för en produkt och den andra ska lagra antal produkter, till exempel värdena 100 och 3.
Beräkna:
totalpriset för samtliga antal produkter
pris inklusive 25 % moms
Skriv ut resultaten på följande sätt:
Pris: 100 kr
Antal: 3
Totalt: 300 kr
Totalt inklusive moms: 375 kr
Använd variabler och matematiska operatorer för att genomföra beräkningarna. Skriv inte in de färdiga resultaten direkt i console.log().

Pether Sand 2026 */

/* pris och antal */
let price = 100;
let quantity = 3;

/* uträkning */
let exklMoms = price * quantity;
let inklMoms = price * quantity + exklMoms * 0.25;

/* det som skrivs ut */
console.log(`Pris: ${price} kr`);
console.log(`Antal: ${quantity} st`);
console.log(`Totalt: ${exklMoms} kr`);
console.log(`Totalt inklusive moms: ${inklMoms} kr`);
