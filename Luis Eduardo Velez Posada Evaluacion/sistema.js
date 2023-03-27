let nombreUsuario = prompt("Ingrese su nombre:");
let emailUsuario = prompt("Ingrese su correo electrónico:");
let identificacionUsuario = prompt("Ingrese su número de identificación:");

let emailValido = emailUsuario.includes("@");
let  identificacionValida = identificacionUsuario.length >= 5 && identificacionUsuario.length <= 10;

if (!emailValido && !identificacionValida) {
  console.log(nombreUsuario + ", email e identificación incorrectos");
} else if (!emailValido) {
  console.log(nombreUsuario + ", email no válido");
} else if (!identificacionValida) {
  console.log(nombreUsuario + ", identificación no válida");
} else {
  console.log("Registro exitoso para " + nombreUsuario);
}

