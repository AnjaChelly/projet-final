document.addEventListener("DOMContentLoaded", function () {
  // Load the header content
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => document.getElementById("header-container").innerHTML = data);});
  
    function includeFooter() {
      fetch('footer.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('footer-container').innerHTML = data;
          })
          .catch(error => console.error('Erreur de chargement du pied de page:', error));
  }
  // Appeler la fonction pour inclure le pied de page
  includeFooter(); 

  document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "acceuil/image1",
        "acceuil/image2.webp",
        "acceuil/image3.jpg",
        "acceuil/image4.jpg",
        "acceuil/image5.jpg",
        // Ajoutez autant d'URLs d'images que nécessaire
    ];

    const imageElement = document.getElementById("slideshowImage");
    let currentIndex = 0;

    function showNextImage() {
        // Mettez à jour la source de l'image avec l'URL de l'image suivante
        imageElement.src = images[currentIndex];
        // Incrémentez l'index pour passer à l'image suivante
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Affichez la première image immédiatement
    showNextImage();

    // Changez d'image toutes les 2 secondes (ajustez selon vos besoins)
    setInterval(showNextImage, 2000);
});

let buttonIndex = 4; // Indice du prochain bouton à ajouter
let contenuInitial;
    const boutonsDynamiques = ['Health', 'Baby Names', 'Labor&Delivery'];

    window.onload = function () {
      // Récupérez le contenu initial du conteneur
      contenuInitial = document.getElementById('buttonContainer').innerHTML;
    };

    function resetButtons() {
      // Réinitialisez le contenu du conteneur avec le contenu initial
      document.getElementById('buttonContainer').innerHTML = contenuInitial;
      // Réactivez le bouton "Show More"
      document.querySelector('.show-more-btn').disabled = false;
      addAndRemoveButton();
    }

    function addAndRemoveButton() {
      // Récupérez le conteneur des boutons
      const buttonContainer = document.getElementById('buttonContainer');

      // Récupérez le prochain bouton dynamique à ajouter
      const prochainBouton = boutonsDynamiques.shift();

      if (prochainBouton) {
        // Créez un nouveau bouton avec le texte spécifique
        const newButton = document.createElement('button');
        newButton.className = 'button';
        newButton.textContent = prochainBouton;

        // Ajoutez le nouveau bouton au conteneur des boutons
        buttonContainer.insertBefore(newButton, document.querySelector('.show-more-btn'));

        // Supprimez le premier bouton du conteneur (si possible)
        const premierBouton = document.querySelector('.button');
        if (premierBouton) {
          premierBouton.remove();
        }
      } else {
        resetButtons();
        
      }
    }
  
  function voirProduit(lien) {
    // Rediriger vers le site d'achat
    window.location.href = lien;
}