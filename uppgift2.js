"use strict";

/* Lösning till uppgift 2, program som räknar ut pris för x antal varor excl/incl moms,
Pether Sand 2026 */

/* pris och antal */
let price = 100;
let quantity = 3;

/* uträkning */
let exklMoms = price * quantity;
console.log(exklMoms);
let inklMoms = price * quantity + exklMoms * 0.25;
console.log(inklMoms);
