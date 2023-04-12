
var markers = document.querySelectorAll('a-marker');
markers.forEach(e => {
  e.addEventListener('markerFound', function () {
    typeWriter(e.id);
    console.log('found' + e.id);
  });
});

var i = 0;
var demoMarker = 'Bonjour ! Je suis le noble tisserand, vous voulez vous aventurez pour la grande quete ? Mais vous etes nu.e comme un ver ! Ecoutez, j aurais besoin de materiaux pour faire une armure, trouvez les … et vous serez equipe.e !';
var delay = 25;
var demoText = document.querySelector('#demo-text');




function typeWriter(markerId) {
  var txt = eval(markerId)
  setInterval(() => {
    if (i < txt.length) {
      console.log(demoText);
      demoText.setAttribute('value', demoText.getAttribute('value') + txt.charAt(i));
      i++;
    }
  }, 25);
}