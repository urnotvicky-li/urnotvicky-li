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
        description: '	困'

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


// clear emoji button 
function myFunction() {
  while (document.querySelectorAll('.emoji-container').length > 0) {
    document.querySelector('.emoji-container').remove();
}
}
