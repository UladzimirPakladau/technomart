let popup = document.querySelector('.search-popup');
let popupButton = document.querySelector('.open-popup');
let closeButton = document.querySelector('.close-popup');

popupButton.onclick = function() {
  popup.classList.toggle('popup-switcher');
};

closeButton.onclick = function() {
  popup.classList.toggle('popup-switcher');
};



