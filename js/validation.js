document.querySelector('.register-form').addEventListener('submit', function(e) {
    const nom = document.getElementById('nameinput').value;
    const email = document.getElementById('adressinput').value;
    const mdp = document.getElementById('motinput').value;
    const dob = document.getElementById('dob').value;
    const skin = document.getElementById('skin-type').value;

    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nomRegEx = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
    let estValide = true;

    if (!nomRegEx.test(nom)) {
        alert("Le nom doit contenir au moins 3 lettres.");
        estValide = false;
    }

    if (!emailRegEx.test(email)) {
        document.getElementById('email-error').style.display = 'block';
        estValide = false;
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    if (mdp.length < 6) {
        alert("Le mot de passe doit faire au moins 6 caractères.");
        estValide = false;
    }

    if (!dob || !skin) {
        alert("Veuillez remplir votre date de naissance et votre type de peau.");
        estValide = false;
    }

    if (estValide) {
        e.preventDefault();
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', mdp);
        localStorage.setItem('userDob', dob);
        localStorage.setItem('userSkin', skin);
        alert("Inscription réussie ! Bienvenue chez Azar.");
        window.location.href = "connexion.html";
    } else {
        e.preventDefault();
    }
});