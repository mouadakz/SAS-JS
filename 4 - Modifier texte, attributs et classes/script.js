let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() {
  titre.innerText = "Titre modifié !";
  titre.classList.toggle("highlight");
  image.setAttribute("src", "image/lamine2.webp");
  image.setAttribute("alt", "image lamine de espane");
});
