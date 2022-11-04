function potenciaN() {
    let numero = document.getElementById("txtNumero").value;
    let potencia = document.getElementById("txtPotencia").value;
    let respuesta = Math.pow(numero, potencia);
    document.getElementById("txtRespuesta").innerHTML = respuesta;
}

function Billetes() {
    let soles = document.getElementById("soles").value;
    let cincuenta = 0;
    let veinte = 0;
    let diez = 0;
    let cinco = 0;
    if (soles>=50) {
        cincuenta += Math.floor(soles/50);
        soles = soles%50;
    }
    if (soles>=20) {
        veinte += Math.floor(soles/20);
        soles = soles%20;
    }
    if (soles>=10) {
        diez += Math.floor(soles/10);
        soles = soles%10;
    }
    if (soles>=5) {
        cinco += Math.floor(soles/5);
        soles = soles%5;
    }
    respuesta = `${cincuenta} billetes de S/.50\n${veinte} billetes de S/.20\n${diez} billetes de S/.10\n${cinco} monedas de S/.5\n${soles} monedas de S/.1`
    document.getElementById("billetes").innerHTML = respuesta;
}

function Tiempo() {
    let segundos = document.getElementById("segundos").value;
    let dias = 0;
    let horas = 0;
    let minutos = 0;
    if (segundos>=86400) {
        dias += Math.floor(segundos/86400);
        segundos = segundos%86400;
    }
    if (segundos>=3600) {
        horas += Math.floor(segundos/3600);
        segundos = segundos%3600;
    }
    if (segundos>=60) {
        minutos += Math.floor(segundos/60);
        segundos = segundos%60;
    }
    respuesta = `${dias} dias\n${horas} horas\n${minutos} minutos\n${segundos} segundos`
    document.getElementById("tiempo").innerHTML = respuesta;
}

const input_3_1 = document.getElementById("input_3_1");
const input_3_2 = document.getElementById("input_3_2");
const input_3_3 = document.getElementById("input_3_3");
const input_3_4 = document.getElementById("input_3_4");

const button_3 = document.getElementById("button_3");
const print_3 = document.getElementById("print_3");

function promedio(n1, n2, n3, n4) {
  let prom = (n1 + n2 + n3 + n4) / 4;
  console.log(prom);
  return `El promedio final del ciclo es de ${prom}, por tanto, tu promedio es ${
    prom < 10.5 ? "Especial" : prom < 15 ? "Regular" : "Excelente"
  }.`;
}

button_3.addEventListener("click", function () {
  print_3.innerHTML = promedio(
    parseFloat(input_3_1.value),
    parseFloat(input_3_2.value),
    parseFloat(input_3_3.value),
    parseFloat(input_3_4.value)
  );
});