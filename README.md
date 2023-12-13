# Bitcoin-Ticker-Extension
### Overview
Bitcoin Ticker Extension grab it and see what's the price of Bitcoin in USD. Working in Chrome and Firefox
This Chrome extension provides a simple way to track the current price of Bitcoin directly from your browser. The extension fetches real-time data from the CoinGecko API and displays the information in a popup.

### Installation
To install the extension, follow these steps:
1. Download or clone the repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top right.
4. Click "Load unpacked" and select the extension folder.

### Features
- **Real-time Bitcoin Price:** The extension fetches the current Bitcoin price using the CoinGecko API.
- **Automatic Updates:** The extension automatically updates the Bitcoin price every minute.

### Code Structure

#### Background Script (`background.js`)
- The background script is responsible for handling alarms and triggering the fetching of Bitcoin prices at regular intervals.
- The extension fetches the initial Bitcoin price when installed.

#### Content Script (`content.js`)
- The content script interacts with the DOM of the displayed web page.
- It retrieves the Bitcoin price from Chrome storage and updates the popup accordingly.

#### Popup HTML (`popup.html`)
- The HTML structure for the extension's popup, displaying the Bitcoin price and related information.

#### Popup JavaScript (`popup.js`)
- The JavaScript code for the popup dynamically updates the displayed information based on the retrieved data from Chrome storage.
- It creates a link to the GitHub profile of the extension creator (CryptoGodSon) and appends it to the popup.

### Styling
The extension popup is styled using simple CSS to create a clean and visually appealing design. The design includes a title, Bitcoin price display, and information about the creator.

### Credits
- This extension is created by [CryptoGodSon](https://github.com/CryptGodSon). Visit the GitHub profile for more projects.

### License
This project is licensed under the [MIT License](LICENSE.md).

Feel free to contribute or report issues!
