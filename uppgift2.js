"use strict";

/* Uppgift 2
Program som lagrar pris och antal som sedan skriver ut en uträkning av dessa med och utan moms
Pether Sand 2026 */

// pris och antal
let price = 100;
let quantity = 3;

// uträkning
let exklMoms = price * quantity;
let inklMoms = price * quantity + exklMoms * 0.25;

// det som skrivs ut
console.log(`Pris: ${price} kr`);
console.log(`Antal: ${quantity} st`);
console.log(`Totalt: ${exklMoms} kr`);
console.log(`Totalt inklusive moms: ${inklMoms} kr`);
