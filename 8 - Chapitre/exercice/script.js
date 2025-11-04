let form = document.getElementById("f");
let input = document.getElementById("inp");
let list = document.getElementById("list");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let txt = input.value;
    if(txt !== ""){
        list.innerHTML += `<li>${txt}</li>`;
    
    }
});
