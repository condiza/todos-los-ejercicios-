let a = parseInt(prompt("Ingrese un numero para hallar su factorial"));
let factorial = 1;
while(a!=0){
    factorial = factorial * a ;
    a = a - 1;
}
console.log("El factorial del numero es:", factorial);