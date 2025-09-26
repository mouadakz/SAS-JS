let score=0;
let round=10;
let question;
let correct;
let utili;
let i;
let vt;
let random;

let T=[  
  ["Maquetter une application","c1"],
  ["Réaliser une interface utilisateur web statique et adaptable","c2"],
  ["Développer une interface utilisateur web dynamique","c3"],
  ["Créer une base de données - niveau 1","c5"],
  ["Développer les composants daccès aux données - niveau 1","c6"],
  ["Développer la partie back-end dune application web ou web mobile - niveau 1","c7"],
  ["Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce","c4"],
  ["Framwork FrontEnd (React, vueJs...)","c8"],
  ["Comprendre la démarche pédagogique à Solicode","t1"],
  ["Collaboration & posture professionnelle","t2"],
  ["Gérer un projet avec Git & GitHub","t3"]
];

for(i=1;i<=round;i++){

random=Math.floor(Math.random()*T.length);
question=T[random][0];
correct=T[random][1];

utili=prompt(`${i}/${round}\n${question}`);
  
if(!utili) continue;

if (utili ==="exit"){
    break;
}
vt = utili.trim().toLowerCase()=== correct;
if (vt){
    score=score+1
}else{
    score=score+0
}



    alert(vt ? `Correct : ${score}` : ` Faux : ${score}`);

}
 alert(`bien joue scour dialek howa     ${score}/${round}`);
