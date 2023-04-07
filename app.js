
var marker = document.querySelector('#demo-marker');
marker.addEventListener('markerFound', function () {
  // execute your function here
  typeWriter();
  console.log('found');
});

var i = 0;
var txt = 'Bonjour, moi c’est je suis le noble tisserand, vous voulez vous aventurez pour la grande quête ? Mais vous êtes nu.e comme un ver ! Écoutez, j’aurais besoin de matériaux pour faire une armure, trouvez les … et vous serez équipé.e !';
var speed = 25;
var demoText = document.querySelector('#demo-text');

function typeWriter() {
  if (i < txt.length) {
    console.log(demoText);
    demoText.setAttribute('value', demoText.getAttribute('value') + txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}