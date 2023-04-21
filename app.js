
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

    function getSlideIndex(n) {
      if ((currentSlide != 0 && n > 0)) {
        return currentSlide += n;
      } else return currentSlide;
    }
    printDialog(dialogs[e.id][getSlideIndex(0)]);
  });
});

function updateSlide(x) {

}

function checkIndex() {

}



function printDialog(txt) {
  var i = 0;
  currentTxtBox.setAttribute('value', '');
  setInterval(() => {
    if (i < txt.length) {
      currentTxtBox.setAttribute('value', currentTxtBox.getAttribute('value') + txt.charAt(i));
      i++;
    }
  }, 25);
}