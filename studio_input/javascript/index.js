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
        description: '哭',
        english: 'Crying Face'
    },
    {
        emoji: '😃',
        description: '哈哈',
        english: 'Grinning Face'
    },
    {
        emoji: '🥳',
        description: '聚会笑脸',
        english: 'Partying Face'
    },
    {
        emoji: '👻',
        description: '鬼',
        english: 'Ghost'
    },
    {
        emoji: '😫',
        description: '累死了',
        english: 'Tired Face'
    },
    {
        emoji: '😠',
        description: '生气',
        english: 'Angry Face'
    },
    {
        emoji: '😝',
        description: '吐舌',
        english: 'Squinting Face'
    },
    {
        emoji: '🤪',
        description: '滑稽',
        english: 'Zany Face'
    },
    {
        emoji: '😱',
        description: '吓死了',
        english: 'Screaming in Fear'
    },
    {
        emoji: '🥺',
        description: '恳求的脸',
        english: 'Pleading Face'
    },
    {
        emoji: '🥰',
        description: '喜笑颜开',
        english: 'Smiling Face'
     }, 
    {
        emoji: '😂',
        description: '笑哭了',
        english: 'Face with Tears of Joy'
    },
    {
        emoji: '🙄',
        description: '翻白眼',
        english: 'Face with Rolling Eyes'
    },
    {
        emoji: '🤩',
        description: '好崇拜哦',
        english: 'Star-Struck'
    },
    {
        emoji: '🤡',
        description: '小丑脸',
        english: 'Clown Face'
    },
    {
        emoji: '🙏',
        description: '双手合十',
        english: 'Folded Hands'
    },
    {
      emoji: '😘',
      description: '飞吻',
      english: 'Blowing a Kiss'
    },
    {
      emoji: '🥶',
      description: '冷脸',
      english: 'Cold Face'
    },
    {
      emoji: '👪',
      description: '家庭',
      english: 'Family'
    },
    {
      emoji: '😲',
      description: '震惊',
      english: 'Astonished Face'
    },
    {
      emoji: '🥱',
      description: '打呵欠',
      english: 'Yawning Face'
    },
    {
      emoji: '🙌',
      description: '举双手',
      english: 'Raising Hands'
    },
    {
      emoji: '🥶',
      description: '冷脸',
      english: 'Cold Face'
    },
    {
      emoji: '😡',
      description: '怒火中烧',
      english: 'Pouting Face'
    },
    {
      emoji: '😈',
      description: '恶魔微笑',
      english: 'Smiling Face with Horns'
    },
    {
      emoji: '🤧',
      description: '	打喷嚏',
      english: 'Sneezing Face'
    },
    {
      emoji: '😺',
      description: '大笑的猫',
      english: 'Grinning Cat'
    },
    {
      emoji: '💔',
      description: '心碎',
      english: 'Broken Heart'
    },
    {
      emoji: '🧧',
      description: '红包',
      english: 'Red Envelope'
    },
    {
      emoji: '😑',
      description: '无语',
      english: 'Expressionless Face'
    },
];

var clickable = document.getElementById('container');

// add emoji dynamically
clickable.addEventListener("click", function(e) {
  const div = document.createElement("div");
  div.classList.add('emoji-container');
  const emoji = document.createElement('span');
  const description = document.createElement('description');
  const english = document.createElement('english');
  const rand = Math.floor(Math.random() * emojiList.length);
  emoji.append(emojiList[rand].emoji);
  description.append(emojiList[rand].description);
  english.append(emojiList[rand].english);
  div.style.position = "absolute";
  div.style.emoji = randomEmoji();
  div.style.left = e.pageX + "px";
  div.style.top = e.pageY + "px";
  div.style.transition = "all 2s";
  div.append(emoji, description, english);
  
//   emoji position and opacity
  setTimeout(function() {
    div.style.opacity = "2";
    div.style.transition = "all 2s";
    div.style.transform = "translateY(0px) scale(2)";
  }, 900);
  
  setTimeout(function() {
    div.style.opacity = "1";
    div.style.transform = "translateY(-100px) scale(0.5)";
  }, 900);
  
  document.body.appendChild(div)
});

// clear emoji button 
function myFunction() {
  while (document.querySelectorAll('.emoji-container').length > 0) {
    document.querySelector('.emoji-container').remove();
}
}
