let text = document.getElementById('animate-text');
let splitText = text.innerText.split('');
text.innerHTML = '';
let i = 0;

function animateText() {
  if (i < splitText.length) {
    text.innerHTML += splitText[i];
    i++;
    setTimeout(animateText, 120); // Afficher la lettre suivante après un délai de 120 millisecondes
  } else {
    setTimeout(function () {
      text.innerHTML = '';
      i = 0; // Réinitialise l'indice i pour recommencer
      animateText(); // Lance à nouveau l'animation
    }, 2000); // Attendre 2.0 seconde avant de réinitialiser
  }
}

animateText();