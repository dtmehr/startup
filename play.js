const btnDescriptions = [
  { file: 'sound1.mp3', hue: 120 },
  { file: 'sound2.mp3', hue: 0 },
  { file: 'sound3.mp3', hue: 60 },
  { file: 'sound4.mp3', hue: 240 },
];


function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, milliseconds);
  });
}

setInterval(() => {
  let score = Math.floor(Math.random() * 3000);
  const chatText = document.getElementById("notifier");
  console.log(chatText)
  chatText.innerHTML = 'bob ordered ' + score
}, 2000);
let clicks = 0
function addToCart(){
  clicks += 1
  cartCount = document.getElementById("cartCount")
  cartCount.innerHTML = "Cart: " + clicks
}
