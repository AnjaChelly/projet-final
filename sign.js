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
  
  function changerContenu() {
 
  // Créer un div pour le nouveau contenu
  var divContenu = document.createElement('div');
  
  // Créer un élément div pour le texte2
  var divTexte2 = document.createElement('div');
  divTexte2.innerHTML = 'Enter your email address to log in to your <br> Super MOM account';
  divTexte2.id = "monTexte"; 
  


  var labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email :';
  labelEmail.id = "monMail"; 

  // Ajouter un champ de saisie de type email
  var inputEmail = document.createElement('input');
  inputEmail.type = 'email';
  inputEmail.id = "email";
  inputEmail.placeholder = 'Entrer votre email';
  inputEmail.required = true;

  inputEmail.style.width = '400px';
   
var labelPass = document.createElement('label');
labelPass.textContent = 'Password :';
labelPass.id = "monPass"; 

var inputPass= document.createElement('input');
inputPass.type = 'password';
inputPass.placeholder = 'Entrez votre password';
inputPass.id = "email";
inputPass.required = true;

inputPass.style.width = '400px';

  // Ajouter un bouton
var bouton = document.createElement('button');
bouton.innerHTML = 'Send';
bouton.id="btnlogin";
bouton.addEventListener('click', function() {
  window.location.href = "https://mail.google.com/";
});

var divTexte4 = document.createElement('div');
divTexte4.textContent = 'Forgot Password!';
divTexte4.id="txt4";

  // Ajouter les éléments au div
  divContenu.appendChild(divTexte2);
  divContenu.appendChild(document.createElement('br')); // Ajouter un saut de ligne
  divContenu.appendChild(labelEmail);
  divContenu.appendChild(document.createElement('br'));
  divContenu.appendChild(inputEmail);
  divContenu.appendChild(document.createElement('br'));
  divContenu.appendChild(labelPass);
  divContenu.appendChild(document.createElement('br')); // Ajouter un saut de ligne
  divContenu.appendChild(inputPass);
  divContenu.appendChild(document.createElement('br')); 
  divContenu.appendChild(bouton);
  divContenu.appendChild(document.createElement('br')); // Ajouter un saut de ligne
  divContenu.appendChild(divTexte4);


  // Mettre à jour le contenu de la deuxième ligne
  col3.innerHTML = '';
  col3.appendChild(divContenu);
  col4.innerHTML='';
  col4.appendChild(divTexte4);

  }
  
  function onClickLogin() {
    var logInButton = document.getElementById('col1');
    var signUpButton = document.getElementById('col2');
     
    logInButton.classList.add('clicked');
    signUpButton.style.color = 'black';
    logInButton.style.color='#61a556';
    logInButton.style.borderBottom = '2px solid #61a556';
    signUpButton.style.borderBottom = 'none';

    signUpButton.classList.remove('clicked');
    changerContenu();
  }
 
  document.addEventListener('DOMContentLoaded', function() {
    var contenu3 = document.getElementById('col3');
    contenu3.setAttribute('data-initial-content', contenu3.innerHTML);
});

    function onClickSignUp() {
      var signUpButton = document.getElementById('col2');
      var logInButton = document.getElementById('col1');
      var contenu3 = document.getElementById('col3');
        
      signUpButton.classList.add('clicked');
      signUpButton.style.color = '#8CC084';
      signUpButton.style.borderBottom = '2px solid #8CC084';
      logInButton.style.borderBottom = 'none';
      logInButton.style.color='black';
      
      logInButton.classList.remove('clicked');
  
      var contenuInitial = contenu3.getAttribute('data-initial-content');
        contenu3.innerHTML = contenuInitial;}

      
        function showValidationPopup() {
          // Afficher le popup de validation
          document.getElementById('validationPopup').style.display = 'block';
          document.getElementById('popup').style.display = 'none';
      }
      
      function fermerValidationPopup() {
          // Fermer le popup de validation
          document.getElementById('validationPopup').style.display = 'none';

      }    
        
  
function fermerPopup() {
          document.getElementById('popup').style.display = 'none';
          document.getElementById('overlay').style.display = 'none';
        } 

function afficherPopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}         


