let nbr1=prompt("enter nbr 1 :");
let op = prompt("entre un operator");
let nbr2=prompt("enter nbr 2 :");
let resulta;
switch(op){
  case "+":
    resulta=nbr1+nbr2;
    console.log("result:",nbr1,"+",nbr2,"=",resulta);
  break;
  case "-":
    resulta=nbr1-nbr2;
    console.log("result:",nbr1,"-",nbr2,"=",resulta);
  break;
  case "*":
    resulta=nbr1*nbr2;
    console.log("result:",nbr1,"*",nbr2,"=",resulta);
   break;
   case "/":
if(nbr2==0){
        console.log("non");

    }else{
        resulta=nbr1/nbr2;
        console.log("result:",nbr1,"/",nbr2,"=",resulta);

    }

    break;
   }
