// add text-based emojis
var emoji = document.querySelector("#emoji");
// emoji.innerText = String.fromCodePoint(0x1F354,);
emoji.innerText = "😋 🤩 😗 😒 🤕 😨 😡 🤬 🤡 🥱 😓 ";

let clickDiv = document.querySelector("#clickDiv");
// click event
clickDiv.addEventListener("click", function(event){
    console.log("Click")
    console.log(event);

    
});

