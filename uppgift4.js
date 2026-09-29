"use strict";
/* Uppgift 4
Program som skriver ut nummer 1-20, sedan ojämna och till sist jämna
Pether Sand 2026 */

/* 
Räkna från 1-20*/
for (var i = 1; i <= 20; i++) {
  console.log(i);
}

/*  Skriver ut ojämna nummer */
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

//  Skriver ut jämna nummer
for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
