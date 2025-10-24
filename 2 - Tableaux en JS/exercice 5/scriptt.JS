//tmrin1
console.log("\n---  tmrin1 ---\n");

let T1=[
  { titre: "Étranger", auteur: "Albert Camus", prix: 100 },
  { titre: "Les Misérables", auteur: "Victor Hugo", prix: 29 },
  { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", prix: 278 }
]
for(let i=0;i<T1.length;i++){
    console.log(`${T1[i].titre}, ${T1[i].auteur}, ${T1[i].prix} DH`)
}



//tmrin2
console.log("\n---  tmrin2 ---\n");

let total=0;
for(let i=0;i< T1.length;i++){
    total=total+T1[i].prix;
}
    console.log("somme=",total);




//tmrin3
console.log("\n---  tmrin3 ---\n");

for(let i=0;i<T1.length;i++){
    if(T1[i].prix>=100){
        console.log(T1[i].prix);
    }
}



//tmrin4
console.log("\n---  tmrin4 ---\n");

let T4=[
  { titre: "Étranger", auteur: "Albert Camus", prix: 100 },
  { titre: "Les Misérables", auteur: "Victor Hugo", prix: 29 },
  { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", prix: 278 }
]
T4.push({ titre: "Candide", auteur: "Voltaire", prix: 180 });

for(let i=0;i<T4.length;i++){
console.log(`${T4[i].titre}, ${T4[i].auteur}, ${T4[i].prix} DH`)
}
