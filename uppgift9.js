"use strict";

/* Uppgift 9
Program som lagrar information om personer i en array, dessa skrivs sedan ut genom en forEach loop och if-sats. 
Pether Sand 2026 */

//array
const persons = [
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

//Tom array som forEach lagrar information i
function getPersons(persons) {
  const person = [];

  //forEach loop som går igenom arrayen och skriver ut information beroende på ålder
  persons.forEach((person) => {
    if (person.age < 18) {
      console.log(`${person.name} bor i ${person.city} och är inte myndig`);
    } else {
      console.log(`${person.name} bor i ${person.city} och är myndig`);
    }
  });
  return persons;
}
const result = getPersons(persons);
