//Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se
//introduzca el cero.

let contador = 0;
let suma = 0;
while( true ){
    let nume = parseFloat(prompt("Ingrese el numero"));
    if(nume === 0){
        break;
    }
    suma += nume;
    contador++;
    

}
promedio =  suma / contador
console.log("Promedio es:", promedio);