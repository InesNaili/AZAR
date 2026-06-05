//  Fonction pour calculer le total dynamiquement
function calculerTotal() {
    const lignes = document.querySelectorAll('#contenu-panier tr');
    let total = 0;

    lignes.forEach(ligne => {
        
        if (ligne.cells.length > 1) {
            const prixTexte = ligne.cells[1].innerText;
            
            const prix = parseInt(prixTexte.replace(/\D/g, ''));
            if (!isNaN(prix)) {
                total += prix;
            }
        }
    });

    // Mise à jour des affichages
    document.getElementById('total-prix').innerText = total + " DA";
    document.getElementById('grand-total').innerText = total + " DA";
}

// Fonction pour charger les produits depuis la mémoire
function chargerPanier() {
    const table = document.getElementById('contenu-panier');
    let produits = JSON.parse(localStorage.getItem('monPanier')) || [];
    let html = "";

    if (produits.length === 0) {
        html = `<tr><td colspan="3" style="text-align:center; padding:30px; color:#2D4F3F;">
                Votre panier est vide. <br><br>
                <a href="produit.html" style="color:#2D4F3F; font-weight:bold; text-decoration:underline;">Retourner à la boutique</a>
                </td></tr>`;
    } else {
        produits.forEach((p, index) => {
            
            const prixAffichage = p.prix.toString().includes("DA") ? p.prix : p.prix + " DA";
            
            html += `
                <tr>
                    <td style="color:#333;">
                        <i class="fas fa-leaf" style="color: #8BA888; margin-right: 10px;"></i> 
                        ${p.nom}
                    </td>
                    <td style="color:#2D4F3F; font-weight:600;">${prixAffichage}</td>
                    <td>
                        <button onclick="retirerDuPanier(${index})" style="color:#e74c3c; border:none; background:none; cursor:pointer; font-size:1.1rem;">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            `;
        });
    }

    table.innerHTML = html;
    calculerTotal();
}

// Fonction pour retirer un produit
function retirerDuPanier(index) {
    let panier = JSON.parse(localStorage.getItem('monPanier')) || [];
    panier.splice(index, 1);
    localStorage.setItem('monPanier', JSON.stringify(panier));
    chargerPanier();
}

//  Fonction de validation finale
function validerCommande() {
    const total = document.getElementById('grand-total').innerText;
    let panier = JSON.parse(localStorage.getItem('monPanier')) || [];
    
    if (panier.length === 0) {
        alert("Votre panier est vide !");
    } else {
        alert("Félicitations ! Votre commande Azar Cosmétique de " + total + " est validée. Merci de votre confiance !");
        localStorage.removeItem('monPanier');
        window.location.href = "../index.html";
    }
}

// Lancer le chargement au démarrage
window.onload = chargerPanier;