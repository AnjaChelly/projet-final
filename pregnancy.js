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

    document.addEventListener("DOMContentLoaded", function () {
        var weekGrid = document.getElementById("weekGrid");
    
        for (var i = 1; i <= 40; i++) {
            var weekItem = document.createElement("div");
            weekItem.className = "week-item";
    
            var weekContent = document.createElement("div");
            weekContent.className = "week-content";
    
            var weekIcon = document.createElement("div");
            weekIcon.className = "week-icon";
            weekIcon.innerHTML = '<i class="fas fa-heartbeat"></i>';
    
            var weekNumber = document.createElement("div");
            weekNumber.className = "week-number";
            weekNumber.innerHTML = i;
    
            weekContent.appendChild(weekIcon);
            weekContent.appendChild(weekNumber);
    
            weekItem.appendChild(weekContent);
    
            var weekLink = document.createElement("a");
            weekLink.href = "#week" + i;
            weekLink.innerHTML = "Week " + i;
    
            weekItem.appendChild(weekLink);
    
            weekGrid.appendChild(weekItem);
        }
    
        // Initial state: Afficher les 10 premières semaines
        showItems(10);
    });
    
    function showItems(count) {
        var weekItems = document.querySelectorAll(".week-item");
        weekItems.forEach(function (item, index) {
            if (index < count) {
                item.style.display = "inline-block";
            } else {
                item.style.display = "none";
            }
        });
    }
    var targetWeek;
    if (operation === '+') {
        targetWeek = Math.min(visibleWeeks + 1, 40);
    } else if (operation === '-') {
        targetWeek = Math.max(visibleWeeks - 1, 1);
    }
    function showWeek(operation) {
        var weekItems = document.querySelectorAll(".week-item");
        var visibleWeeks = document.querySelectorAll(".week-item[style='display: inline-block;']").length;
    
        // Calculate the new range of weeks to display
        var start = Math.max(1, visibleWeeks);
        var end = Math.min(40, start + 9);
    
        // Move the entire list to the left or right
        var newGrid = document.createElement("div");
        newGrid.id = "weekGrid";
    
        for (var i = start + (operation === '+' ? 1 : 0); i <= end + (operation === '+' ? 1 : 0); i++) {
            var weekItem = document.createElement("div");
            weekItem.className = "week-item";
    
            var weekContent = document.createElement("div");
            weekContent.className = "week-content";
    
            var weekIcon = document.createElement("div");
            weekIcon.className = "week-icon";
            weekIcon.innerHTML = '<i class="fas fa-heartbeat"></i>';
    
            var weekNumber = document.createElement("div");
            weekNumber.className = "week-number";
            weekNumber.innerHTML = i;
    
            weekContent.appendChild(weekIcon);
            weekContent.appendChild(weekNumber);
    
            weekItem.appendChild(weekContent);
    
            var weekLink = document.createElement("a");
            weekLink.href = "#week" + i;
            weekLink.innerHTML = "Week " + i;
    
            weekItem.appendChild(weekLink);
    
            newGrid.appendChild(weekItem);
        }
    
        // Replace the existing grid with the new one
        var container = document.getElementById("weekGrid").parentNode;
        container.replaceChild(newGrid, document.getElementById("weekGrid"));
    
        // Initial state: Display the first 10 weeks
        showItems(10);
    }

    
    