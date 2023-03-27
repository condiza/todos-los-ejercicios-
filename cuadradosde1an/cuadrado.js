let contador = 1;
let suma = 0;
let nume = parseInt(prompt("Ingrese hasta que numero quiere sumar"))
while( contador <= nume ){
    suma += contador * contador;
    contador++;
   
}
console.log("la suma es:", suma);