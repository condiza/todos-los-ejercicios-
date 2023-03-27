//Cree un programa que calcule el promedio de 10 números. Use ciclo for

let suma = 0;

for (let index = 1; index <= 10;) {
    let num = parseFloat(prompt("Ingrese un  numero"));
    suma = suma + num;
    index++

    
}
console.log("promedio es igual a:", suma/10);