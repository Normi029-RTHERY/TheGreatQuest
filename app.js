
var markers = document.querySelectorAll('a-marker');
var currentMarker = null;

markers.forEach(e => {
  e.addEventListener('markerFound', () => {
    currentMarker = eval(e.id);
    printDialog();
    console.log(currentMarker);
  });
});




var i = 0;
var textile_marker = 'Te voilà enfin aventurier.ère ! Je me présente, je suis Bill, maître tisserand. Dites-moi mon brave, j’ai entendu dire que vous partiez explorer les contrées perdues de notre royaume de Serres mais de ce que je vois vous êtes nu.e comme un ver ! Écoutez, il a peut être une tunique que je peux vous fournir mais j’aurais besoin d’étoffes supplémentaires, aidez moi à les retrouvez et je vous équiperai !';
var textileText = document.querySelector('#textile-text');

var delay = 25;
function printDialog() {
  setInterval(() => {
    if (i < txt.length) {
      demoText.setAttribute('value', demoText.getAttribute('value') + currentMarker.charAt(i));
      i++;
    }
  }, delay);
}


function clicked() {
  console.log('clicked');
}