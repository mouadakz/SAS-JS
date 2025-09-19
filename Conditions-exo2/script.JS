let note;
note=prompt('entre un note :');
if (note<10){
    console.log("Insuffisant");
}else{
    if (note<=12){
        console.log("Passable");
    }else{
        console.log("Bien");
    }
}