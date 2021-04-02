// console.log("testing");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key
var base = new Airtable({ apiKey: "keyCelRUKzAZcpJXJ" }).base(
    "appZqb5UmdeoqEYET"
  );

//   get our collection base, select all the records
// specify functions that will receive the data
base("playlist").select({}).eachPage(gotPageOfSongs, gotAllSongs);

// an empty array to hold our data
var songs = [];


// callback function that receives our data
function gotPageOfSongs(records, fetchNextPage) {
    console.log("gotPageOfSongs()");
    // add the records from this page to our books array
    songs.push(...records);
    // request more pages
    fetchNextPage();
  }


  // call back function that is called when all pages are loaded
function gotAllSongs(err) {
    console.log("gotAllSongs()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogSongs();
    showSongs();
  }

  // just loop through the songs and console.log them
function consoleLogSongs() {
    console.log("consoleLogSongs()");
    songs.forEach((song) => {
      console.log("Song:", song);
    });
  }

  // loop through the airtable data, create elements
function showSongs() {
    console.log("showSongs()");
    songs.forEach((song) => {
        // add song title
        // var songTitle = document.createElement("h1");
        // songTitle.innerText = song.fields.title;
        // document.body.append(songTitle);

        // default-----
        // var nameOfArtist = document.createElement("p");
        // nameOfArtist.innerText = song. fields.artist;
        // document.body.append(nameOfArtist);

        // var songImage = document.createElement("img")
        // songImage.src = song.fields.song_image[0].url;

        // document.querySelector(".container").append(songImage); -image in container/ text in body
        // songtitle, artist, image
        
        // document.body.append(songImage);

        // creating a new div container
        // this is where our song info will go 
        var songContainer = document.createElement("div");
        songContainer.classList.add("song-container");
        document.querySelector(".container").append(songContainer);

         // add image to our song container
         var songImage = document.createElement("img");
         songImage.classList.add("song_image");
         songImage.src = song.fields.song_image[0].url;
         songContainer.append(songImage);
         
        // add song titles to our song container
        var songTitle = document.createElement("h1");
        songTitle.classList.add("title");
        songTitle.innerText = song.fields.title;
        songContainer.append(songTitle);

        // add blank space to our song container
        var songReleased = document.createElement("h2");
        songReleased.classList.add("released");
        songReleased.innerText = song.fields.released;
        songContainer.append(songReleased);

        // add artist to our song container
        var songArtist = document.createElement("p");
        songArtist.classList.add("artist");
        songArtist.innerText = song.fields.artist;
        songContainer.append(songArtist);

        
    });
  }
  