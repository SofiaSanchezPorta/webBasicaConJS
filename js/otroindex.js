let titulo1 = document.createElement("h1");
titulo1.innerText = "Título 1";
titulo1.style.color = "Grey";
document.body.appendChild(titulo1);

let subtitulo1 = document.createElement("h2");
subtitulo1.innerText ="Subtítulo 1";
subtitulo1.style.color ="Blue";
document.body.appendChild(subtitulo1);

let parrafo1 = document.createElement("p");
parrafo1.innerText ="Párrafo 1";
parrafo1.style.color ="Violet";
document.body.appendChild(parrafo1);

let subtitulo2 = document.createElement("h2");
subtitulo2.innerText ="Subtítulo 2";
subtitulo2.style.color ="Red";
document.body.appendChild(subtitulo2);

let parrafo2 = document.createElement("p");
parrafo2.innerText ="Párrafo 2";
parrafo2.style.color ="Green";
document.body.appendChild(parrafo2);

function suma (a, b) {
    return a + b;
}

const resta = function (a, b) {
    return a - b;
}

const multiplicacion = (a, b) => {
    return a * b;
}

const division = function (a, b) {
    return a / b;
}

let a = 3
let b = 7
opcion = 1

switch (opcion) {
    case 1:
        console.log("El resultado de la suma de " + a + " y " + b + " es " + suma(a, b))
        break;
    case 2:
        console.log("El resultado de la resta entre " + a + " y " + b + " es " + resta(a, b))
        break;
    case 3:
        console.log("El resultado de la multiplicación entre " + a + " y " + b + " es " + multiplicacion(a, b))
        break;
    case 4:
        console.log("El resultado de la división de " + a + " y " + b + " es " + division(a, b))
        break;
    default:
        console.log("Opción inválida")
}

let opcion2 = 2
switch (opcion2) {
    case 1:
        console.log("El resultado de la suma de " + a + " y " + b + " es " + suma(a, b))
        break;
    case 2:
        console.log("El resultado de la resta entre " + a + " y " + b + " es " + resta(a, b))
        break;
    case 3:
        console.log("El resultado de la multiplicación entre " + a + " y " + b + " es " + multiplicacion(a, b))
        break;
    case 4:
        console.log("El resultado de la división de " + a + " y " + b + " es " + division(a, b))
        break;
    default:
        console.log("Opción inválida")
}