"use strict";

/* Lösning till uppgift 2, program som räknar ut pris för x antal varor excl/incl moms,
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
