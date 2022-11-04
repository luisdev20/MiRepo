function potencia() {
    numero = document.getElementById('txtNumero').value;
    p = document.getElementById('txtPotencia').value;
    respuesta = 1;

    for (let i = 0; i < parseInt(p); i++) {
        respuesta *= numero;
    }

    document.getElementById('respuesta').innerHTML = respuesta;
}

function ejercicio1() {
    monto = parseInt(document.getElementById('cantidad').value);
    var cincuenta = 0, veinte = 0, diez = 0, cinco = 0, uno = 0;
    if (monto >= 50) {
        cincuenta = Math.trunc(monto / 50);
        monto = monto % 50;
    }
    if (monto >= 20) {
        veinte = Math.trunc(monto / 20);
        monto = monto % 20;
    }
    if (monto >= 10) {
        diez = Math.trunc(monto / 10);
        monto = monto % 10;
    }
    if (monto >= 5) {
        cinco = Math.trunc(monto / 5);
        monto = monto % 5;
    }
    if (monto >= 1) {
        uno = Math.trunc(monto / 1);
        monto = monto % 5;
    }
    document.getElementById('resultado').innerHTML = 'Cincuenta: ' + cincuenta + '\nVeinte: ' + veinte + '\nDiez: ' + diez + '\nCinco: ' + cinco + '\nsol: ' + uno;
}

function ejercicio2() {
    xsegundos = parseInt(document.getElementById('cantidad').value);

    document.getElementById('resultado').innerHTML = 'Dias: ' +  Math.floor(xsegundos / 86400) + '\nHoras: ' + Math.floor((xsegundos % 86400) / 3600) + '\nMinutos: ' + Math.floor(((xsegundos % 86400) % 3600) / 60) + '\nSegundos: ' + ((xsegundos % 86400) % 3600) % 60;
    // document.getElementById('hora').value = xsegundos / 3600;
    // document.getElementById('minuto').value = xsegundos / 60;

}

function ejercicio3() {
    cred01 = parseFloat(document.getElementById("créditocurso01").value)
    cred02 = parseFloat(document.getElementById("créditocurso02").value)
    cred03 = parseFloat(document.getElementById("créditocurso03").value)
    cred04 = parseFloat(document.getElementById("créditocurso04").value)

    nota01 = parseFloat(document.getElementById("notacurso01").value)
    nota02 = parseFloat(document.getElementById("notacurso02").value)
    nota03 = parseFloat(document.getElementById("notacurso03").value)
    nota04 = parseFloat(document.getElementById("notacurso04").value)
    ponderado = (cred01 * nota01 + cred02 * nota02 + cred03 * nota03 + cred04 * nota04) / (cred01 + cred02 + cred03 + cred04);
    situación = '';
    if (ponderado < 10) { situación = "Especial(revisión)" }
    else {
        if (ponderado < 15) { situación = "Regular" }
        else {
            situación = "Excelente"
        }
    } 
    document.getElementById('respuesta').innerHTML = "El ponderado del alumno es: " + ponderado + ", situación : " + situación;
}


    function CalcularPromedio() {
        var p1 = document.getElementById("P1").value;
        var p2 = document.getElementById("P2").value;
        var p3 = document.getElementById("P3").value;
        var p4 = document.getElementById("P4").value;
        var prom = (5 * parseFloat(p1) + 4 * parseFloat(p2) + parseFloat(p3) + 2 * parseFloat(p4)) / 12;
        estado="";
        if(prom<11){
        estado="Especial";
        }else{
        if(prom<15){
        estado="Regular";
        }else{
        estado="Excelente";
        }
        }
        document.getElementById("promedio").innerHTML = prom+" "+estado;
        }
