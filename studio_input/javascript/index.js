// prints a message in the browser's dev tools console
console.log("hello");

// let emoji stay on the screen after clicking the mouse (I think this is not working)
document.onkeydown = function (ev) {
  if(ev.keyCode >= 65 && ev.keyCode <=90){
    var down = document.querySelector('.'+ ev.key)
    if(down.style.display === 'none'){
      down.style.display = 'block'
    }else {
      down.style.display = 'none'
    }
  }
}

// I wish to add text also appear on the screen with the emoji, but not sure how to do it..
// clicking event -- emoji shows up and disapear
function randomEmoji() {
  return 'rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})';
}

// array with initial values
var arr = ["😣","🥰","🥳","😀","😠","👻","🤮","😎","🙇‍♀️","🙇‍♂️","👀","😩","🤡","👨‍👩‍👧‍👧","🙃","😬","😭","😍","🤥","😡","😈"];
document.addEventListener("click", function(e) {
  let span = document.createElement("span");
  span.innerHTML = arr[Math.floor(Math.random() * arr.length)];
  span.style.position = "absolute";
  span.style.emoji = randomEmoji();
  span.style.left = e.pageX + "px";
  span.style.top = e.pageY + "px";
  span.style.transition = "all 0.9s";
  
//   position and opacity
  setTimeout(function() {
    span.style.opacity = "1";
    span.style.transform = "translateY(-50px) scale(1)";
  }, 800);
  
  setTimeout(function() {
    span.style.opacity = "1";
    span.style.transform = "translateY(-100px) scale(1.5)";
  }, 800);
  
//   var intervalID = setInterval(testing)
//   clearIntervalID = set
  
// for loop
  setTimeout(function() {
    let spanChilds = document.querySelector("span");
    for (let i = 0; i < spanChilds.length; i++)   {
    //   let item = arr[i];
    //   console.log(item);
      if (spanChilds[i].style.opacity === "0") {
        document.body.removeChild(spanChilds[i])
        }
    }
  }, 1000);
  document.body.appendChild(span)

})