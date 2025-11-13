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

function majStats() {
    const total = bibliotheque.length;
    const dispo = bibliotheque.filter(l => l.disponible).length;
    const nonDispo = total - dispo;
    information.textContent = `Total: ${total} livres | Disponibles: ${dispo} | Empruntés: ${nonDispo}`;
}

function afficher(liste = bibliotheque) {
    catalog.innerHTML = "";
    for (let i = 0; i < liste.length; i++) {
        let livre = liste[i];
        let card = document.createElement("div");
        card.className = "card";

        let titre = document.createElement("h2"); titre.textContent = livre.titre;
        let code = document.createElement("p"); code.textContent = "Code: " + livre.code;
        let auteur = document.createElement("p"); auteur.textContent = "Auteur: " + livre.auteur;
        let annee = document.createElement("p"); annee.textContent = "Année: " + livre.annee;
        let prix = document.createElement("p"); prix.textContent = "Prix: " + livre.prix + " dh";
        let dispo = document.createElement("p"); dispo.textContent = livre.disponible ? "Disponible" : "Emprunté";

        let btntoggle = document.createElement("button");
        btntoggle.textContent = livre.disponible ? "Emprunter" : "Rendre";
        btntoggle.onclick = function() {
            livre.disponible = !livre.disponible;
            afficher();
            majStats();
            localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
        };

        let btnsuppr = document.createElement("button");
        btnsuppr.textContent = "Supprimer";
        btnsuppr.onclick = function() {
            bibliotheque.splice(bibliotheque.indexOf(livre), 1);
            afficher();
            majStats();
            localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
        };

        card.append(titre, code, auteur, annee, prix, dispo, btntoggle, btnsuppr);
        catalog.appendChild(card);
    }
    majStats();
}

ajouterForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const code = parseInt(document.getElementById("code").value);
    const titre = document.getElementById("titre").value;
    const auteur = document.getElementById("auteur").value;
    const annee = parseInt(document.getElementById("annee").value);
    const prix = parseFloat(document.getElementById("prix").value);
    const disponible = document.getElementById("disponible").checked;

    bibliotheque.push({ code, titre, auteur, annee, prix, disponible });
    ajouterForm.reset();
    afficher();
    localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
});


afficher();
majStats();

window.addEventListener("beforeunload", () => {
    localStorage.setItem("bibliotheque", JSON.stringify(bibliotheque));
});
