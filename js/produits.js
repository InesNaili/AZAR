// Base de données des produits d'Azar Cosmétique
const produitsAzar = [
    //  CATEGORIE : CHEVEUX 6 produits
    {
        nom: "Huile de Romarin",
        categorie: "cheveux",
        prix: "1200 DA",
        description: "Stimule la pointe et fortifie le cuir chevelu.",
        ingredients: "Huile d'olive pure infusée aux feuilles de romarin frais, huile essentielle de romarin.",
        image: "../image/image1.png"
    },
    {
        nom: "Masque au Beurre de Karité",
        categorie: "cheveux",
        prix: "1900 DA",
        description: "Hydratation intense pour cheveux secs.",
        ingredients: "Beurre de karité brut, huile d'argan, huile de coco, vitamine E.",
        image: "../image/image5.png"
    },
    {
        nom: "Huile de Ricin Pure",
        categorie: "cheveux",
        prix: "950 DA",
        description: "Favorise la croissance des cheveux et cils.",
        ingredients: "100% Huile de graines de ricin pressée à froid, sans additifs.",
        image: "../image/image6.png"
    },
    {
        nom: "Shampoing Solide Ortie",
        categorie: "cheveux",
        prix: "800 DA",
        description: "Régule le sébum et lutte contre les pellicules.",
        ingredients: "Poudre d'ortie piquante, argile verte, tensioactif doux issu de la noix de coco, huile de jojoba.",
        image: "../image/image18.jpg"
    },
    {
        nom: "Sérum Capillaire Argan & Jojoba",
        categorie: "cheveux",
        prix: "2200 DA",
        description: "Gaine la fibre capillaire et apporte une brillance miroir.",
        ingredients: "Huile d'argan bio, huile de jojoba, huile essentielle de vanille naturelle.",
        image: "../image/image19.jpg"
    },
    {
        nom: "Lotion Tonique au Clou de Girofle",
        categorie: "cheveux",
        prix: "1100 DA",
        description: "Antiseptique et stimulante contre la chute de cheveux.",
        ingredients: "Hydrolat de clou de girofle, eau distillée, extrait de menthe poivrée.",
        image: "../image/image17.jpg"
    },

    //  CATEGORIE : VISAGE 6 produits
    {
        nom: "Savon à l'Argile",
        categorie: "visage",
        prix: "600 DA",
        description: "Nettoie en profondeur et élimine les impuretés.",
        ingredients: "Huile de grignons d'olive saponifiée, argile verte montmorillonite, eau de source.",
        image: "../image/image3.png"
    },
    {
        nom: "Sérum Éclat Vitamine C",
        categorie: "visage",
        prix: "2500 DA",
        description: "Illumine le teint et réduit les taches.",
        ingredients: "Acide ascorbique (Vitamine C), gel d'aloe vera pur, acide hyaluronique végétal.",
        image: "../image/image2.png"
    },
    {
        nom: "Eau Rose Distillée",
        categorie: "visage",
        prix: "850 DA",
        description: "Tonifie et apaise les peaux sensibles.",
        ingredients: "100% Pur distillat de pétales de roses de Damas, sans alcool.",
        image: "../image/image4.png"
    },
    {
        nom: "Huile d'Amande Douce",
        categorie: "visage",
        prix: "1100 DA",
        description: "Idéale pour les massages et peaux sèches.",
        ingredients: "Huile d'amande douce pressée à froid, traces naturelles de vitamine A et E.",
        image: "../image/image9.png"
    },
    {
        nom: "Gommage Visage Sucre & Miel",
        categorie: "visage",
        prix: "1350 DA",
        description: "Exfolie en douceur pour un effet peau neuve instantané.",
        ingredients: "Miel pur local, sucre blond fin, huile d'abricot, extrait de calendula.",
        image: "../image/image11.jpg"
    },
    {
        nom: "Masque Détox Charbon Actif",
        categorie: "visage",
        prix: "1650 DA",
        description: "Resserre les pores et absorbe l'excès de sébum.",
        ingredients: "Charbon végétal actif, argile blanche (kaolin), huile essentielle de tea tree.",
        image: "../image/image12.jpg"
    },

    // CATEGORIE : CORPS 6 produits
    {
        nom: "Gommage au Café",
        categorie: "corps",
        prix: "1400 DA",
        description: "Exfolie et raffermit la peau en douceur.",
        ingredients: "Marc de café arabica recyclé, huile de coco, sucre de canne roux, huile essentielle de pamplemousse.",
        image: "../image/image7.png"
    },
    {
        nom: "Lait de Corps Coco",
        categorie: "corps",
        prix: "1750 DA",
        description: "Laisse la peau douce et parfumée.",
        ingredients: "Lait de coco bio, cire d'abeille, huile d'amande douce, glycérine végétale.",
        image: "../image/image8.png"
    },
    {
        nom: "Baume Corporel au Calendula",
        categorie: "corps",
        prix: "1500 DA",
        description: "Répare et apaise les zones très sèches ou irritées.",
        ingredients: "Macérât huileux de calendula, beurre de karité, cire de tournesol.",
        image: "../image/image13.jpg"
    },
    {
        nom: "Huile Sèche Scintillante",
        categorie: "corps",
        prix: "2600 DA",
        description: "Sublime le bronzage avec de légers reflets dorés.",
        ingredients: "Huile de noisette, huile de sésame, micas dorés naturels d'origine minérale.",
        image: "../image/image14.jpg"
    },
    {
        nom: "Crème Mains Réparatrice Olive",
        categorie: "corps",
        prix: "900 DA",
        description: "Protège les mains contre le dessèchement.",
        ingredients: "Huile d'olive vierge, hydrolat de lavande, gel d'aloe vera, cire émulsifiante végétale.",
        image: "../image/image15.jpg"
    },
    {
        nom: "Déodorant Solide Palmarosa",
        categorie: "corps",
        prix: "950 DA",
        description: "Efficacité 24h sans sels d'aluminium.",
        ingredients: "Bicarbonate de sodium fin, flocon d'avoine colloïdale, huile de coco, huile essentielle de palmarosa.",
        image: "../image/image16.jpg"
    }
];

// Fonction pour afficher dynamiquement les cartes de produits
function afficherProduits(liste) {
    const grille = document.getElementById('liste-produits');
    let html = "";

    liste.forEach(produit => {
        html += `
            <div class="produit-card">
                <img src="${produit.image}" alt="${produit.nom}">
                <div class="produit-info">
                    <h3>${produit.nom}</h3>
                    <p class="description">${produit.description}</p>
                    <p class="prix">${produit.prix}</p>
                    
                    <div class="details-ingredients-container">
                        <button class="btn-toggle-ingredients" onclick="toggleIngredients(this)">
                            <span>Plus de détails</span> <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="ingredients-content" style="display: none;">
                            <p><strong>Composition :</strong> ${produit.ingredients}</p>
                        </div>
                    </div>

                    <button class="btn-add" onclick="ajouterAuPanier('${produit.nom}', '${produit.prix}')">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        `;
    });

    grille.innerHTML = html;
}

function toggleIngredients(bouton) {
    const contenu = bouton.nextElementSibling;
    const icone = bouton.querySelector('i');
    
    if (contenu.style.display === "none") {
        contenu.style.display = "block";
        icone.style.transform = "rotate(180deg)";
        bouton.querySelector('span').innerText = "Moins de détails";
    } else {
        contenu.style.display = "none";
        icone.style.transform = "rotate(0deg)";
        bouton.querySelector('span').innerText = "Plus de détails";
    }
}


function filtrerProduits(categorie) {
    if (categorie === 'tous') {
        afficherProduits(produitsAzar);
    } else {
        const produitsFiltres = produitsAzar.filter(p => p.categorie === categorie);
        afficherProduits(produitsFiltres);
    }
}

function ajouterAuPanier(nom, prix) {
    let panier = JSON.parse(localStorage.getItem('monPanier')) || [];
    panier.push({ nom: nom, prix: prix });
    localStorage.setItem('monPanier', JSON.stringify(panier));
    alert(nom + " a été ajouté au panier !");
}


window.addEventListener('DOMContentLoaded', () => {
    afficherProduits(produitsAzar);
});