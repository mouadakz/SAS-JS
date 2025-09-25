let i=0;
let somme=0;
let note;

do {
  note = +prompt("Entrez un note:");

  if (note == -1) {
    alert("hazek lma ");
    break; 
  }

  if (note < 0 || note > 20) {
    alert("try agin");
  } else {
    somme = somme + note;
    i++;
  }

} while (true);

if (i > 0) {
  let moyene = somme / i;
  alert("Nbr de note =\t                     " + i );
  alert( " moyene = \t                   " + moyene);
} else { 
  alert("madakhalti walo abro ");
}
