
// variables

let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su apellido");
let email = prompt("Ingrese un email");
let contraseña = prompt("Ingrese una contraseña")
let formaPago = prompt("Defina la forma en la que va a realizar su pago");


// login

alert(`${nombre} ${apellido} Bienvenido a Sneakers`)

console.log(`${nombre} ${apellido} Inicio sesion`);
console.log(`Su email es ${email} y su contraseña es ${contraseña}`);

// forma de pago elegida

function pago(efectivo, tarjetaCredito, creditoPersonal) {
    switch (formaPago) {
        case "efectivo":
            alert(`Usted paga en ${formaPago}`);
            break;
        case "tarjetaCredito":
            alert(`Usted paga con ${formaPago}`);
            break;
        case "creditoPersonal":
            alert(`Usted pagara con ${formaPago}`);
            break;
        default:
            alert("Usted solo esta mirando");
            break;
    }
}

pago();

// bucle para calcular el talle del cliente

for (let i = 35; i <= 45; i++) {
    alert(`A continuacion los talles disponibles: ${i}`);
}

function elegirTalle(){
    let elegirTalle= parseInt(prompt("Ingrese su talle. Tenga en cuenta los disponibles."));

    if(elegirTalle >=35 && elegirTalle <=45){
        alert("Su talle esta disponible");
        elegirTalle();
    }
    else(elegirTalle >= 46 || elegirTalle <= 34);{
        alert("Tenga en cuenta los talles disponibles");
        elegirTalle();
    }
}
elegirTalle();
