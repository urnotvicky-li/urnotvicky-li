// chinese font from adobe 
  (function(d) {
    var config = {
      kitId: 'owy4qqq',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

// prints a message in the browser's dev tools console
console.log("hello");

// click anywhere on the page, emoji will shows up
// the description of the emoji also will shows up

function randomEmoji() {
  return 'rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})';
}

// emoji description 
// // array with initial values
const emojiList = [
    {
        emoji: '😢',
        description: '	嘿嘿'

    },
    {
        emoji: '😃',
        description: '哈哈'
    },
    {
        emoji: '🥳',
        description: '聚会笑脸'
    },
    {
        emoji: '👻',
        description: '鬼'
    },
    {
        emoji: '😫',
        description: '累死了'
    },
    {
        emoji: '😠',
        description: '生气'
    },
    {
        emoji: '😝',
        description: '吐舌'
    },
    {
        emoji: '🤪',
        description: '滑稽'
    },
    {
        emoji: '😱',
        description: '吓死了'
    },
    {
        emoji: '🥺',
        description: '喜笑颜开'
    },
    {
        emoji: '🥰',
        description: '喜笑颜开'
     }, 
    {
        emoji: '😂',
        description: '笑哭了'
    },
    {
        emoji: '🙄',
        description: '翻白眼'
    },
    {
        emoji: '🤩',
        description: '好崇拜哦'
    },
    {
        emoji: '🤡',
        description: '小丑脸'
    },
    {
        emoji: '🙏',
        description: '双手合十'
    },
    {
      emoji: '😘',
      description: '飞吻'
    },
    {
      emoji: '😪',
      description: '困'
    },
    {
      emoji: '👪',
      description: '家庭'
    },
    {
      emoji: '😲',
      description: '震惊'
    },
    {
      emoji: '🥱',
      description: '打呵欠'
    },
    {
      emoji: '🙌',
      description: '举双手'
    },
    {
      emoji: '🥶',
      description: '冷脸'
    },
    {
      emoji: '😡',
      description: '怒火中烧'
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


// darg without library
// var dragItem = document.querySelector('emoji-container');
// var container = document.querySelector('container');

// var active = false;
// var currentX;
// var currentY;
// var initialX;
// var initialY;
// var xOffset = 0;
// var yOffset = 0;

//   container.addEventListener("touchstart", dragStart, false);
//   container.addEventListener("touchend", dragEnd, false);
//   container.addEventListener("touchmove", drag, false);

//   container.addEventListener("mousedown", dragStart, false);
//   container.addEventListener("mouseup", dragEnd, false);
//   container.addEventListener("mousemove", drag, false);

  // function dragStart(e) {
  //   if (e.type === "touchstart") {
  //     initialX = e.touches[0].clientX - xOffset;
  //     initialY = e.touches[0].clientY - yOffset;
  //   } else {
  //     initialX = e.clientX - xOffset;
  //     initialY = e.clientY - yOffset;
  //   }

  //   if (e.target === dragItem) {
  //     active = true;
  //   }
  // }

  // function dragEnd(e) {
  //   initialX = currentX;
  //   initialY = currentY;

  //   active = false;
  // }

  // function drag(e) {
  //   if (active) {
    
  //     e.preventDefault();
    
  //     if (e.type === "touchmove") {
  //       currentX = e.touches[0].clientX - initialX;
  //       currentY = e.touches[0].clientY - initialY;
  //     } else {
  //       currentX = e.clientX - initialX;
  //       currentY = e.clientY - initialY;
  //     }

  //     xOffset = currentX;
  //     yOffset = currentY;

  //     setTranslate(currentX, currentY, dragItem);
  //   }
  // }

//   // function setTranslate(xPos, yPos, el) {
//   //   el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
//   // }

//   var dragBox = function (drag, wrap) {

//     function getCss(ele, prop) {
//          return parseInt(window.getComputedStyle(ele)[prop]);
//     }

//     var initX,
//         initY,
//         dragable = false,
//         wrapLeft = getCss(wrap, "left"),
//         wrapRight = getCss(wrap, "top");

//     drag.addEventListener("mousedown", function (e) {
//          dragable = true;
//          initX = e.clientX;
//          initY = e.clientY;
//     }, false); 

//    document.addEventListener("mousemove", function (e) {
//          if (dragable === true ) {
//              var nowX = e.clientX,
//                  nowY = e.clientY,
//                  disX = nowX - initX,
//                  disY = nowY - initY;
//              wrap.style.left = wrapLeft + disX + "px";
//              wrap.style.top = wrapRight + disY + "px";
//          }
//     });

//     drag.addEventListener("mouseup", function (e) {
//          dragable = false;
//          wrapLeft = getCss(wrap, "left");
//          wrapRight = getCss(wrap, "top");
//     }, false); 

//  };

//  dragBox(document.querySelector("#bar"), document.querySelector("#box"));

// clear emoji button 
function myFunction() {
  while (document.querySelectorAll('.emoji-container').length > 0) {
    document.querySelector('.emoji-container').remove();
}
}
