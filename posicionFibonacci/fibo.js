

let numero=parseInt(prompt("Ingrese la posicion que del numero que requiere"));
a = 0;
b = 1;
c = 0;
s = 1;

for(i = 3; i <= numero; i++){
    c = a + b;
    s = s + c;
    a = b;
    b = c;
}
console.log("La posicion", numero + " corresponde al numero", c);