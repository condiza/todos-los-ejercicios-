//Escriba un algoritmo que calcule la potencia de a b
//potencial = a * a * a * ... * a (b veces) USE MULTIPLICACIONES. NO USE POTENCIACIÓN. USE CICLOS
let a = parseFloat(prompt("Ingrese el primer numero"));
let b = parseFloat(prompt("Ingrese el segundo numero"));
let pote = 1 ;
while (b > 0){
    pote *= a
    b--;

}
console.log("el resultado es:", pote);