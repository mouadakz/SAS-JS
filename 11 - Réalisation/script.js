let bibliotheque = JSON.parse(localStorage.getItem("bibliotheque"));
if (!Array.isArray(bibliotheque)) {
    bibliotheque = [
        { code: 12, titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, prix: 150, disponible: true },
        { code: 34, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, prix: 200, disponible: true },
        { code: 56, titre: "You Don't Know JS", auteur: "Kyle Simpson", annee: 2020, prix: 180, disponible: false }
    ];
    localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
}

const ajouterForm = document.getElementById("f");
const catalog = document.getElementById("dy");
const information = document.getElementById("info");
let triAsc = true;

// --- Fonction statistiques ---
function majStats() {
    const total = bibliotheque.length;
    const dispo = bibliotheque.filter(l => l.disponible).length;
    const nonDispo = total - dispo;
    information.textContent = `Total: ${total} livres | Disponibles: ${dispo} | Empruntés: ${nonDispo} | Livre le plus cher: ${livreLePlusCher()}`;
}

// --- Livre le plus cher ---
function livreLePlusCher() {
    if (bibliotheque.length === 0) return "";
    let max = bibliotheque[0];
    for (let livre of bibliotheque) {
        if (livre.prix > max.prix) max = livre;
    }
    return `${max.titre} (${max.prix} dh)`;
}

// --- Affichage livres ---
function afficher(liste = bibliotheque) {
    catalog.innerHTML = "";
    for (let livre of liste) {
        let card = document.createElement("div");
        card.className = "card";

        let titre = document.createElement("h2"); titre.textContent = livre.titre;
        let code = document.createElement("p"); code.textContent = "Code: " + livre.code;
        let auteur = document.createElement("p"); auteur.textContent = "Auteur: " + livre.auteur;
        let annee = document.createElement("p"); annee.textContent = "Année: " + livre.annee;
        let prix = document.createElement("p"); prix.textContent = "Prix: " + livre.prix + " dh";

        // Bouton Réserver ou label Réservé
        let dispoElem = document.createElement("p");
        if (livre.disponible) {
            let btn = document.createElement("button");
            btn.textContent = "Réserver";
            btn.onclick = function() {
                livre.disponible = false;
                localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
                afficher();
                majStats();
            };
            dispoElem.appendChild(btn);
        } else {
            dispoElem.textContent = "Réservé";
            dispoElem.style.fontWeight = "bold";
            dispoElem.style.color = "red";
        }

        // Bouton Supprimer
        let btnsuppr = document.createElement("button");
        btnsuppr.textContent = "Supprimer";
        btnsuppr.onclick = function() {
            bibliotheque.splice(bibliotheque.indexOf(livre), 1);
            localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
            afficher();
            majStats();
        };

        card.append(titre, code, auteur, annee, prix, dispoElem, btnsuppr);
        catalog.appendChild(card);
    }
    majStats();
}

// --- Ajouter livre ---
ajouterForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const code = parseInt(document.getElementById("code").value);
    const titre = document.getElementById("titre").value;
    const auteur = document.getElementById("auteur").value;
    const annee = parseInt(document.getElementById("annee").value);
    const prix = parseFloat(document.getElementById("prix").value);
    const disponible = document.getElementById("disponible").checked;

    bibliotheque.push({ code, titre, auteur, annee, prix, disponible });
    localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
    ajouterForm.reset();
    afficher();
});

// --- Bouton Trier ---
const btnTrier = document.createElement("button");
btnTrier.textContent = "Trier par Titre";
btnTrier.style.marginLeft = "10px";
btnTrier.onclick = function() {
    bibliotheque.sort((a,b) => triAsc ? a.titre.localeCompare(b.titre) : b.titre.localeCompare(a.titre));
    triAsc = !triAsc;
    afficher();
};
document.querySelector('header').appendChild(btnTrier);

// --- Barre de recherche ---
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Rechercher un livre par titre';
searchInput.style.marginLeft = "10px";
searchInput.addEventListener('input', () => {
    const texte = searchInput.value.toLowerCase();
    const filtres = bibliotheque.filter(l => l.titre.toLowerCase().includes(texte));
    afficher(filtres);
});
document.querySelector('header').appendChild(searchInput);

// --- Initialisation ---
afficher();

window.addEventListener("beforeunload", () => {
    localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
});
