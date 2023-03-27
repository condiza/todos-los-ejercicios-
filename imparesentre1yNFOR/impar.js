//Cree un programa que muestre los números impares entre 1 y n. Use ciclo for
 let num = parseFloat(prompt("Ingrese hasta que numero mostrar los impares"));

 for (let index = 1; index <= num;) {
    if(index % 2 !=0){
        console.log("Es impar", index)
    }
    index++
    
 }