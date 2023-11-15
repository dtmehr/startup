const btnDescriptions = [
  { file: 'sound1.mp3', hue: 120 },
  { file: 'sound2.mp3', hue: 0 },
  { file: 'sound3.mp3', hue: 60 },
  { file: 'sound4.mp3', hue: 240 },
];

let bracelets;

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
async function addToCart(i){
  currBracelet = bracelets[i];
  clicks += 1;
  cartCount = document.getElementById("cartCount");
  cartCount.innerHTML = "Cart: " + clicks;
  const response = await fetch('/api/addCart', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(currBracelet),
  });
}

async function loadShop(){
  const response = await fetch('/api/store', {
    method: 'GET',
    headers: {'content-type': 'application/json'},
  });
  bracelets = await response.json();
  container = document.getElementById('container')
  

  for (let i = 0; i < bracelets.length; i++) {
    currObject = bracelets[i];
    span = document.createElement("span");
    span.setAttribute('id', 'item')
    image = document.createElement("img");
    image.setAttribute('alt', currObject.name);
    image.setAttribute('src', "");
    button = document.createElement('button');
    button.innerHTML = 'purchase';
    button.setAttribute('onclick', 'addToCart('+i+')')
    span.appendChild(image);
    span.appendChild(button)
    container.appendChild(span);
  }


}
