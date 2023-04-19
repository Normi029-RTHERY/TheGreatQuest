
var markers = document.querySelectorAll('a-marker');
var currentMarker;
var currentTxtBox;
var dialogs;

fetch('./assets/dialogs.json')
  .then(response => response.json())
  .then(data => {
    dialogs = data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

markers.forEach(e => {
  e.addEventListener('markerFound', () => {
    currentMarker = eval(e.id);
    currentTxtBox = currentMarker.querySelector('.txtBox');
    var currentSlide = 0;
    console.log(currentMarker);
    console.log(currentTxtBox);
    printDialog(dialogs[e.id][currentSlide]);
  });
});

function updateSlide() {

}

function checkIndex() {

}

function printDialog(txt) {
  var i = 0;
  currentTxtBox.setAttribute('value', null);
  setInterval(() => {
    if (i < txt.length) {
      currentTxtBox.setAttribute('value', currentTxtBox.getAttribute('value') + txt.charAt(i));
      i++;
    }
  }, 25);
}