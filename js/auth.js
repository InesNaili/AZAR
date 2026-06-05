//BASE DE DONNÉES SIMULE 
const utilisateursDefaut = [
    { email: "test@azar.com", mdp: "Azar123" }
];

//INITIALISATION 
if (!localStorage.getItem('userEmail')) {
    localStorage.setItem('userEmail', utilisateursDefaut[0].email);
    localStorage.setItem('userPassword', utilisateursDefaut[0].mdp);
}

//GESTION DE LA CONNEXION 
document.querySelector('.login-form').addEventListener('submit', function(e) {
    
    //On empêche le rechargement de la page
    e.preventDefault(); 

    // Récupération des valeurs
    const emailTape = document.getElementById('adressinput').value;
    const mdpTape = document.getElementById('motinput').value;
    const errorMsg = document.getElementById('loginError');

    //Validation du format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Validation côté client 
    if (!emailRegex.test(emailTape)) {
        if (errorMsg) {
            errorMsg.style.display = 'block';
            errorMsg.innerText = "Veuillez entrer une adresse e-mail valide.";
        }
        return; 
    }

    //Récupération des données du localStorage
    const emailStocke = localStorage.getItem('userEmail');
    const mdpStocke = localStorage.getItem('userPassword');

    //Vérification des identifiants
    if (emailTape === emailStocke && mdpTape === mdpStocke) {
        
        alert("Connexion réussie ! Heureux de vous revoir chez Azar.");
        
        // Session simulée
        localStorage.setItem('estConnecte', 'true');
        
        //Redirection
        window.location.href = "index.html"; 

    } else {
        //Gestion des erreurs
        if (errorMsg) {
            errorMsg.style.display = 'block';
            errorMsg.innerText = "Email ou mot de passe incorrect.";
        }
        
        document.getElementById('motinput').style.borderColor = "#e74c3c";
        document.getElementById('motinput').value = "";
    }
});