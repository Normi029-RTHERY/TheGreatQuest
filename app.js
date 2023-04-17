
var markers = document.querySelectorAll('a-marker');

markers.forEach(e => {
  e.addEventListener('markerFound', () => {
    printDialog(e.id);
    console.log('found' + e);
  });
});


var i = 0;
var demoMarker = 'Te voilà enfin aventurier.ère ! Je me présente, je suis Bill, maître tisserand. Dites-moi mon brave, j’ai entendu dire que vous partiez explorer les contrées perdues de notre royaume de Serres mais de ce que je vois vous êtes nu.e comme un ver ! Écoutez, il a peut être une tunique que je peux vous fournir mais j’aurais besoin d’étoffes supplémentaires, aidez moi à les retrouvez et je vous équiperai !';
var demoText = document.querySelector('#demo-text');

var delay = 25;
function printDialog(txtIn) {
  var txt = eval(txtIn)
  setInterval(() => {
    if (i < txt.length) {
      demoText.setAttribute('value', demoText.getAttribute('value') + txt.charAt(i));
      i++;
    }
  }, delay);
}


function clicked() {
  console.log('clicked');
}