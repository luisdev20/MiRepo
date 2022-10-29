function Loops1(){
    let ma = [];
    let i=1;
    while(i<=100){
        ma.push(i);
        i++
    }
    document.getElementById("mayor").innerHTML=ma;
}

function Loops2(){
    let imp = [];
    let par = [];
    let sumapar = 0;
    let sumaimpar = 0;
    let lim = parseInt(document.getElementById("limite").value);

    for(let i=0; i<=lim; i++){
        if(i%2 == 0){
            par.push(i);
            sumapar += i;
        }
        else{
            imp.push(i);
            sumaimpar += i;
        }
    }
    
    document.getElementById("impares").innerHTML=imp;
    document.getElementById("sumaimpar").innerHTML=sumaimpar;
    document.getElementById("pares").innerHTML=par;
    document.getElementById("sumapar").innerHTML=sumapar;
}

// 0 1 2 3 4 5 6 7  <-- posiciones
// 1 0 1 0 1 0 1 0  <-- valores

function Secuencia(){
    let limiteSec = 8
    for(let i=0; i<limiteSec; i++){ //Secuencia 1
        if(i%2 == 0){
            process.stdout.write("1");
        }
        else{
            process.stdout.write("0");
        }
    }
    console.log(""); // Para saltar a la siguiente linea
    for(let i=0; i<limiteSec; i++){ //Secuencia 2
        if (i%2 == 0){
            process.stdout.write("-1");
        }
        else {
            process.stdout.write("1");
        }
    }
    console.log(""); // Para saltar a la siguiente linea
    for(let i=1; i<=limiteSec; i++){ //Secuencia 3
        if(i%4 == 1){
            process.stdout.write("1");
        }
        else if(i%4 == 2) {
            process.stdout.write("2");
        }
        else if(i%4 == 3) {
            process.stdout.write("-1");
        }
        else if(i%4 == 0) {
            process.stdout.write("-2");
        }
    }
    console.log(""); // Para saltar a la siguiente linea
    for (let i=1; i<=limiteSec; i++) {
        if (i%3 == 1) {
            process.stdout.write("3")
        }
        if (i%3 == 2) {
            process.stdout.write("4")
        }
        if (i%3 == 0) {
            process.stdout.write("5")
        }
    }
}

Secuencia();
