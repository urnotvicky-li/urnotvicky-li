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

record.fields = {
  "Name"        : [record.fields.A_Name], 
  "Status"      : [record.fields.B_IN],
  "Location"    : [record.fields.C_Location],
  "Out Time"    : [record.fields.D_OutTime],
  "Return Time" : [record.fields.E_BackTime]
};

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

    // creating a new div container
    // this is where image and info will go
    var photoContainer = document.createElement("div");
    photoContainer.classList.add("photo-container");
    document.querySelector(".container").append(photoContainer);

    var photoPhotographer = document.createElement("h1");
    photoPhotographer.classList.add("photographer");
    photoPhotographer.innerText = photo.fields.photographer;
    photoContainer.append(photoPhotographer);

    var photoImage = document.createElement("img");
    photoImage.classList.add("image");
    photoImage.src = photo.fields.land_image[0].url;
    photoContainer.append(photoImage);

    var photoName = document.createElement("h2");
    photoName.classList.add("info");
    photoName.innerText = photo.fields.name_of_image;
    photoContainer.append(photoName);

    var photoLocation = document.createElement("h3");
    photoLocation.classList.add("info");
    photoLocation.innerText = photo.fields.location;
    photoContainer.append(photoLocation);

    var photoYear = document.createElement("h3");
    photoYear.classList.add("info");
    photoYear.innerText = photo.fields.year;
    photoContainer.append(photoYear);

    //add event listener
    //when user clicks (hover) on the name 
    //image will apear or disappear in fullscreen size
    photoContainer.addEventListener("click", function(){
      photoImage.classList.toggle("active");


    })

});
}
