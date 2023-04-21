
var markers = document.querySelectorAll('a-marker');
var currentMarker, activePrev, activeNext, currentTxtBox, dialogs;

fetch('./assets/dialogs.json')
  .then(response => response.json())
  .then(data => {
    dialogs = data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

markers.forEach(e => {
  e.addEventListener('markerFound', async () => {
    currentMarker = eval(e.id);
    currentTxtBox = currentMarker.querySelector('.txtBox');
    activePrev = currentMarker.querySelector('.prevArrow');
    activeNext = currentMarker.querySelector('.nextArrow');
    var currentSlide = 0;

    console.log(currentMarker);
    console.log(currentTxtBox);
    console.log(activePrev, activeNext);

    if (currentSlide = 0) {
      activePrev.setAttribute('material', 'opacity:0');
    }

    function getSlideIndex(n) {
      if ((currentSlide != 0 && n > 0)) {
        return currentSlide += n;
      } else return currentSlide;
    }
    await printDialog(dialogs[e.id][getSlideIndex(0)]);
  });
});

function updateSlide(x) {

}

function checkIndex() {

}



async function printDialog(txt) {
  var i = 0;
  currentTxtBox.setAttribute('value', '');
  setInterval(() => {
    if (i < txt.length) {
      currentTxtBox.setAttribute('value', currentTxtBox.getAttribute('value') + txt.charAt(i));
      i++;
    }
  }, 25);
}