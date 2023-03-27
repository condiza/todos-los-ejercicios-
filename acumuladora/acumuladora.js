 
/*
Crear un  programa que muestre la suma de 5 numeros introducidos por el usuario

*/
let contador = 1;
let suma = 0;
/* suma es una acumuladora 
*/

while (contador <= 5){
    let numero =parseFloat(prompt("Ingrese un numero"));
    suma = suma + numero;
    contador++
}
console.log("La suma es :", suma);
