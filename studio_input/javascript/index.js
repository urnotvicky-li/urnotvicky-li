// prints a message in the browser's dev tools console
console.log("hello");

// click anywhere on the page, emoji will shows up
// the description of the emoji also will shows up

function randomEmoji() {
  return 'rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})';
}

// let div = document.createElement('div');
// div.classList.add("container")

// emoji description 
// // array with initial values
const emojiList = [
    {
        emoji: '😢',
        description: 'Crying Face'
    },
    {
        emoji: '😃',
        description: 'Smiley Face'
    },
    {
        emoji: '🥳',
        description: 'Partying Face'
    },
    {
        emoji: '👻',
        description: 'Ghost'
    },
    {
        emoji: '😫',
        description: 'Tired Face'
    },
    {
        emoji: '😠',
        description: 'Angry Face'
    },
    {
        emoji: '😝',
        description: 'Squinting Face with Tongue'
    },
    {
        emoji: '🤪',
        description: 'Zany Face'
    },
    {
        emoji: '😱',
        description: 'Face Screaming in Fear'
    },
    {
        emoji: '🥺',
        description: 'Pleading Face'
    },
    {
        emoji: '🥰',
        description: 'Smiling Face with Hearts'
     }, 
    {
        emoji: '😂',
        description: 'Face with Tears of Joy'
    },
    {
        emoji: '🙄',
        description: 'Face with Rolling Eyes'
    },
    {
        emoji: '🤩',
        description: 'Star-Struck'
    },
    {
        emoji: '🤡',
        description: 'Clown Face'
    },
    {
        emoji: '🙏',
        description: 'Folded Hands'
    },
    {
      emoji: '😘',
      description: 'Face Blowing a Kiss'
    },
    {
      emoji: '😪',
      description: 'Sleepy Face'
    },
    {
      emoji: '👪',
      description: 'Family'
    },
    {
      emoji: '😲',
      description: 'Astonished Face'
    },
];

var clickable = document.getElementById('container');

// add emoji dynamically
clickable.addEventListener("click", function(e) {
  const div = document.createElement("div");
  div.classList.add('emoji-container');
  const emoji = document.createElement('span');
  const description = document.createElement('description');
  const rand = Math.floor(Math.random() * emojiList.length);
  emoji.append(emojiList[rand].emoji);
  description.append(emojiList[rand].description);
  div.style.position = "absolute";
  div.style.emoji = randomEmoji();
  div.style.left = e.pageX + "px";
  div.style.top = e.pageY + "px";
  div.style.transition = "all 0.9s";
  div.append(emoji, description);
  
//   emoji position and opacity
  setTimeout(function() {
    div.style.opacity = "1";
    div.style.transform = "translateY(-50px) scale(1.8)";
  }, 800);
  
  setTimeout(function() {
    div.style.opacity = "1";
    div.style.transform = "translateY(-100px) scale(0.8)";
  }, 800);
  
// for loop
//   setTimeout(function() {
//     let spanChilds = document.querySelector("span");
//     for (let i = 0; i < spanChilds.length; i++)   {
//     //   let item = arr[i];
//     //   console.log(item);
//       if (spanChilds[i].style.opacity === "0") {
//         document.body.removeChild(spanChilds[i])
//         }
//     }
//   }, 1000);
  document.body.appendChild(div)
});

// drag function
// let draggie = new Draggabilly('.emoji-container');

// $(document).ready( function() {
//   var $draggables = $('.emoji-container').draggabilly({
//     // contain to parent element
//     containment: true
//   });
// });

// darg without library
var dragItem = document.querySelector('emoji-container');
var container = document.querySelector('container');

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

  container.addEventListener("touchstart", dragStart, false);
  container.addEventListener("touchend", dragEnd, false);
  container.addEventListener("touchmove", drag, false);

  container.addEventListener("mousedown", dragStart, false);
  container.addEventListener("mouseup", dragEnd, false);
  container.addEventListener("mousemove", drag, false);

  function dragStart(e) {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
      active = true;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    active = false;
  }

  function drag(e) {
    if (active) {
    
      e.preventDefault();
    
      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }

// clear emoji button 
function myFunction() {
  while (document.querySelectorAll('.emoji-container').length > 0) {
    document.querySelector('.emoji-container').remove();
}
}
