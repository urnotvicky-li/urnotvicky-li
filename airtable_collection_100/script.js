// console.log("testing");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyCelRUKzAZcpJXJ" }).base(
    "appYBXV5xbQgaNSGw"
  );

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("nature").select({}).eachPage(gotPageOfNature, gotAllNature);

// an empty array to hold our nature data
const nature = [];

// callback function that receives our data
function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfNature()");
  // add the records from this page to our books array
  nature.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllNature(err) {
  console.log("gotAllNature()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading nature");
    console.error(err);
    return;
  }

  // call function to show the books
  showNature();
}

////////////////////

// create the book-spines on the shelf
function showBooks() {
  console.log("showNature()");

  // find the shelf element
  const shelf = document.getElementById("shelf");

  // loop through the books loaded from the Airtable API
  books.forEach((book) => {
    // create the div, set its text and class
    const div = document.createElement("div");
    div.innerText = book.fields.title;
    div.classList.add("book-spine");
    // when the user clicks this book spine, call showBook and send the book data and this spine element
    div.addEventListener("click", () => {
      showNature(nature, div);
    });
    // put the newly created book spine on the shelf
    shelf.appendChild(div);
  });
}

// show the detail image for a photographer, and highlight the name of the photographer
function showNature(nature, div) {
  console.log("showNature()", nature);

  // find the book detail element
  const bookDetail = document.getElementById("book-detail");
}
