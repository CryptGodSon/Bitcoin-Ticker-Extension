function fetchBitcoinPrice() {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin"
  )
    .then((res) => res.json())
    .then((data) => chrome.storage.sync.set({ bitcoin: data }))
    .catch((error) => console.log(error));
}

chrome.runtime.onInstalled.addListener(() => {
  fetchBitcoinPrice();
});

chrome.alarms.create({
  periodInMinutes: 1,
});

chrome.alarms.onAlarm.addListener(() => {
  fetchBitcoinPrice();
});