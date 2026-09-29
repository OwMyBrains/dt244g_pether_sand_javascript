"use strict";

/* I den sista uppgiften ska du kombinera flera av de delar du har arbetat med tidigare.
Skapa en array som innehåller minst tre objekt. Varje objekt ska representera en person och innehålla exempelvis:
namn
ålder
stad
Exempel:
const people = [
    {
        name: "Anna",
        age: 30,
        city: "Sundsvall"
    },
    {
        name: "Sofie",
        age: 45,
        city: "Hudiksvall"
    },
    {
        name: "Markus",
        age: 16,
        city: "Härnösand"
    }
];
Skriv sedan ett program som: går igenom arrayen med en loop använder en funktion för att skriva ut informationen om en person:
varje persons namn och stad använder ett villkor för att avgöra om personen är myndig
Exempel på möjlig utskrift: 
Anna bor i Sundsvall och är myndig.
Sofie bor i Hudiksvall och är myndig.
Markus bor i Härnösand och är inte myndig.
Du bestämmer själv vilka personer och värden som ska finnas i arrayen.
Målet med uppgiften är inte att skapa ett avancerat program, utan att visa att du kan kombinera flera grundläggande programmeringskoncept i samma lösning.
Pether Sand 2026 */

//array
const person = [
  {
    name: "Måns",
    age: 11,
    city: "Östersund",
  },
  {
    name: "Elin",
    age: 38,
    city: "Östersund",
  },
  {
    name: "Vigge",
    age: 40,
    city: "Åre",
  },
];

for (let i = 0; i < person.length; i++) {
  console.log(person[i]);
}
