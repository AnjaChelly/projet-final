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