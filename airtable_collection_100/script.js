// console.log("testing");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyCelRUKzAZcpJXJ" }).base(
    "appYBXV5xbQgaNSGw"
  );

//get the "nature" table from the base, select ALL the records, and specify the functions that will receive the data
base("nature").select({}).eachPage(gotPageOfPhotos, gotAllPhotos);

// an empty array to hold our data
var photos = [];

// callback function that receives our data
function gotPageOfPhotos(records, fetchNextPage) {
  console.log("gotPageOfPhotos()");
  // add the records from this page to our books array
  photos.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllPhotos(err) {
  console.log("gotAllPhotos()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading photos");
    console.error(err);
    return;
  }

  // call function to show the books
  consoleLogPhotos();
  showPhotos();
}
////////////////////
// just loop through the photos and console.log them
function consoleLogPhotos() {
  console.log("consoleLogPhotos()");
  photos.forEach((photo) => {
    console.log("Photo:", photo);
  });
}

// look through our airtable data, create elements
function showPhotos() {
  console.log("showPhotos()");
  photos.forEach((photo) => {

  var photoPhotographer = document.createElement("h3");
  photoPhotographer.innerText = photo.fields.photographer;
  document.body.append(photoPhotographer);


  var photoImage = document.createElement("img")
  photoImage.src = photo.fields.land_image[0].url;
  document.body.append(landImage);

});
}
