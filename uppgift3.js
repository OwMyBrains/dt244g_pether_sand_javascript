"use strict";

/* Lösning till uppgift 3, program som säger om en person är barn, vuxen eller pensionär beroende på ålder. 
Pether Sand 2026 */

/* variable */
let age = 64;
/* meddelande för vilken åldersgrupp man ingår i */
if (age <= 17) {
  console.log("Barn");
} else if (age >= 65) {
  console.log("Pensionär");
} else {
  console.log("Vuxen");
}
