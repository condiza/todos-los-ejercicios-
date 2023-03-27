//Cree un programa que calcule el promedio de 10 números

contador = 0;
suma = 0;

while (contador <= 9){
    let nume = parseFloat(prompt("Ingrese el numero"));
    suma = suma + nume;
    contador++
  
}

console.log("Promedio es:", suma/10);