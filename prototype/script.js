let menu;
let cont;
do {
  menu = prompt(
    " _welcome_\n" +
    "|                |\n"+
    "|                |\n"+
    "|                |\n"+
    "|__________ |\n"+
    "C1_______C8\n" +
    "T1_______T3\n"+
    "0______exit\n\t"+
    "entre: "
  );
menu.trim().toUpperCase()
cont++;
  switch (menu) {
    case "C1":
      alert("Maquetter une application	");
      break;
    case "C2":
      alert("Réaliser une interface utilisateur web statique et adaptable	");
      break;
    case "C3":
      alert("Développer une interface utilisateur web dynamique	");
      break;
    case "C5":
      alert("Créer une base de données - niveau 1");
      break;
    case "C6":
      alert("Développer les composants d’accès aux données - niveau 1");
      break;
    case "C7":
      alert("Développer la partie back-end d’une application web ou web mobile - niveau 1");
      break;
    case "C4":
      alert("Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce");
      break;
    case "C8":
      alert("Framwork FrontEnd (React, vueJs...)");
      break;
    case "T1":
      alert("Comprendre la démarche pédagogique à Solicode");
      break;
    case "T2":
      alert("Collaboration & posture professionnelle");
      break;
    case "T3":
      alert("Gérer un projet avec Git & GitHub");
      break;
    case "EXIT":
      
      break;
    default:
      alert(" try again ");
  }

} while (menu !== "EXIT");
alert(cont);