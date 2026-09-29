"use strict";

/* Skapa ett objekt som representerar en bok.
Objektet ska innehålla minst följande egenskaper:
titel
författare
utgivningsår
Skapa slutligen en funktion som tar emot ett bokobjekt som parameter och skriver ut information om boken på ett tydligt sätt.
Exempel:
Titel: The Hobbit
Författare: J.R.R. Tolkien
Utgivningsår: 1937
Pether Sand 2026 */

//Bokinfon lagras i book
function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//Bok som lagras i funktionen book
const book1 = new book("The Hobbit", "J.R.R. Tolkien", 1937);

//utskriften
function showBook(book) {
  console.log(`Titel: ${book.title}`);
  console.log(`Författare: ${book.author}`);
  console.log(`Utgivningsår ${book.year}`);
}
