let nombre= "Juan" //string
let edad="40" //int
let trabaja= true //bool
let info = { //DICCIONARIO
    marca: "Toyota",
    modelo: "Yaris",
    year: 2015
}

let count= 3;
while(count >=0) { //ESTRUCTURA WHILE
    console.log(count)
    count = count - 1;
}

switch (trabaja) { //ESTRUCTURA SWITCH
    case true:
        console.log("Tiene trabajo")
        break;
    case false:
        console.log("No tiene trabajo")
        break;
    default:
        console.log("Error")
}

if (edad > 18) { //ESTRUCTURA IF
    console.log("Es mayor de edad")
} else {
    console.log("Es menor de edad")
}



let titulo = document.createElement("h1");
titulo.innerText= "Hola desde un título";
titulo.style.color="Green";
document.body.appendChild(titulo)

let parrafo = document.createElement("p");
parrafo.innerText= "Hola";
parrafo.style.color= "Red";
document.body.appendChild(parrafo);


