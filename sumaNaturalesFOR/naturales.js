//Cree un programa que calcula la suma de los primeros n números naturales. Use ciclo for
let num = parseInt(prompt("Hasta que numero quiere que el programa sume los numeros naturales"));
let sum = 0;
for (let index = 0; index <= num; index++) {
    sum = index + sum;
    
}
console.log("La suma es:", sum);