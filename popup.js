const priceEl = document.getElementById("price");
const imageEl = document.getElementById("bitcoin-image");
const createdEl = document.getElementById("created"); 

chrome.storage.sync.get(["bitcoin"], (result) => {
  priceEl.textContent = `$ ${result.bitcoin[0].current_price}`;
  imageEl.src = result.bitcoin[0].image;
  

  const linkElement = document.createElement('a');
  linkElement.href = 'https://github.com/CryptGodSon';
  linkElement.target = '_blank';
  linkElement.innerText = 'CryptoGodSon';
  

  while (createdEl.firstChild) {
    createdEl.removeChild(createdEl.firstChild);
  }

  // Dodaj link do elementu created
  createdEl.appendChild(linkElement);
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  priceEl.textContent = `$ ${changes.bitcoin.newValue[0].current_price}`;
});
