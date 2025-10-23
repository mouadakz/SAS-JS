function max(a,b,c){
    let max=a;
    if (b>max){
        max=b;
    }
    if (c>max){
        max=c;
    }
    return max;
}
let maximun=max(10,5,30);
console.log("max=",maximun);
