"use strict";

/* Uppgift 8
Program som lagrar böcker som objekt och skrivs sedan ut. 
Pether Sand 2026 */

//Bokinfon lagras i book
function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//Bok som lagras i funktionen book
const book1 = new book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new book(
  "The Hitchhikers guide to the galaxy",
  "Douglas Adams",
  1979,
);

//utskriften
function showBook(book) {
  console.log(`Titel: ${book.title}`);
  console.log(`Författare: ${book.author}`);
  console.log(`Utgivningsår ${book.year}`);
}
//skriver vilken bok du vill se.
showBook(book1);
showBook(book2);
