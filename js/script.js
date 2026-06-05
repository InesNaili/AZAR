document.addEventListener('DOMContentLoaded', () => {

    //  GESTION INTRO VIDÉO AVEC SÉCURITÉ
    const intro = document.querySelector('.hero-intro-video');
    if (intro) {
        document.body.style.overflow = 'hidden';
        setTimeout(() => { if (!intro.classList.contains('cachee')) window.cacherIntro(); }, 4000);
    }

    window.cacherIntro = function() {
        const intro = document.querySelector('.hero-intro-video');
        if (intro && !intro.classList.contains('cachee')) {
            intro.classList.add('cachee');
            document.body.style.overflow = '';
            setTimeout(() => intro.remove(), 900);
        }
    };

    //  FONCTION POUR AJOUTER AU PANIER
    window.ajouterAuPanier = function(nom, prix, img) {
        let panier = JSON.parse(localStorage.getItem('monPanier')) || [];
        panier.push({ nom: nom, prix: prix, img: img });
        localStorage.setItem('monPanier', JSON.stringify(panier));
        alert(nom + " a été ajouté à votre panier !");
    };

    //  BEST SELLERS
    const produitsData = [
        { nom: "Eau Rose Distillée", prix: "850 DA", img: "image/image4.png", badge: "Favori" },
        { nom: "Gommage Visage Sucre et Miel", prix: "1 350 DA", img: "image/image11.jpg", badge: "Tendance" },
        { nom: "Savon à l'Argile", prix: "600 DA", img: "image/image3.png", badge: "Naturel" },
        { nom: "Lait de Corps Coco", prix: "1 750 DA", img: "image/image8.png", badge: "Premium" },
        { nom: "Masque Détox Charbon Actif", prix: "1 650 DA", img: "image/image12.jpg", badge: "Nouveau" }
    ];

    const grille = document.getElementById('grilleProduits');
    if (grille) {
        produitsData.forEach(p => {
            grille.innerHTML += `
                <div class="carte-produit">
                    <div class="carte-badge">${p.badge}</div>
                    <img src="${p.img}" alt="${p.nom}">
                    <div class="info-produit">
                        <h3>${p.nom}</h3>
                        <div class="prix-container">
                            <p>${p.prix}</p>
                            <button class="btn-ajout" onclick="ajouterAuPanier('${p.nom}', '${p.prix}', '${p.img}')">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    //  NAVIGATION CARROUSEL
    window.scrollCarrousel = function(offset) {
        const grille = document.getElementById('grilleProduits');
        if (grille) grille.scrollBy({ left: offset, behavior: 'smooth' });
    };
});