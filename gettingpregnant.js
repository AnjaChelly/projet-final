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



    function showContent(item) {
        var ovulationDivs = document.querySelectorAll('#ovulation-content > div');

        // Afficher le contenu d'ovulation spécifique
        var specificDiv = document.getElementById(item);
        if (specificDiv) {
            specificDiv.classList.remove('hidden');
        }
    }

    function calculateOvulation() {
        var selectedDate = new Date(document.getElementById('datepicker').value);
        
        // Supposons que la durée moyenne du cycle menstruel est de 28 jours
        var cycleLength = 28;

        // Calculer la date probable de l'ovulation (14 jours avant le début du prochain cycle)
        var ovulationStart = new Date(selectedDate);
        ovulationStart.setDate(selectedDate.getDate() + 14);

        // Calculer la fin de la période d'ovulation (5 jours après le début de l'ovulation)
        var ovulationEnd = new Date(ovulationStart);
        ovulationEnd.setDate(ovulationStart.getDate() + 5);

        // Afficher les résultats
        document.getElementById('ovulation-start').textContent = formatDate(ovulationStart);
        document.getElementById('ovulation-end').textContent = formatDate(ovulationEnd);

        // Afficher la section de résultat
        document.getElementById('ovulation-result').classList.remove('hidden');
    }

    function formatDate(date) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }