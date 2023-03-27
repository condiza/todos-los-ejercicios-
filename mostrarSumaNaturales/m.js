//Cree un programa que calcula la suma de los primeros n números naturales
let n = parseInt(prompt("Ingrese el número"));
let contador = 0;
let suma = 0;

while(contador <= n){
    suma =  contador + suma;
    contador++
}
console.log("la suma es:", suma);