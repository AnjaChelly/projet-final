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


    function sendMessage() {
        var messageInput = document.getElementById('message-input');
        var message = messageInput.value.trim();
    
        if (message !== '') {
            var chatMessages = document.getElementById('chat-messages');
            var newMessage = document.createElement('div');
            newMessage.textContent = message;
            chatMessages.appendChild(newMessage);
    
            // Efface le champ de saisie après l'envoi
            messageInput.value = '';
    
        }
    }

