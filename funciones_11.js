function Serie1() {
    n = 8;
    v = 1;
    a = 1;
    let Ax = [];
    do {
        if (a == 2) a = 0;
        Ax.push(a)
        console.log(Ax[v-1]);
        v++;
        a++;
    } while(v <= n);
    document.getElementById('resultado').innerHTML = Ax;
}

function Serie2() {
    n = 8;
    v = 1;
    let Ax = [];
    Ax.push(-1);
    do {
        Ax.push(Ax[v-1]*-1)
        console.log(Ax[v-1]);
        v++;
    } while(v <= n);
    document.getElementById('resultado').innerHTML = Ax;
}

function Serie3() {
    n = 8;
    v = 1;
    x = 1;
    s = 1;
    let Ax = [];
    do {
        Ax.push(s*x);
        console.log(Ax[v-1]);
        if (x == 2) {
            x = 0;
            s *= -1;
        }
        x++;
        v++;
    } while(v <= n);
    document.getElementById('resultado').innerHTML = Ax;
}


function Serie4() {
    n = 8;
    v = 1;
    x = 3;
    let Ax = [];
    do {
        Ax.push(x);
        console.log(Ax[v-1]);
        if (x == 5) x = 2;
        x++;
        v++;
    } while(v <= n)
    document.getElementById('resultado').innerHTML = Ax;
}

function CambiarImagen() {
    random = Math.floor(Math.random() * 7);
    document.getElementById("gatos").src="img/gato_"+random+".jpg";
}

function ReverseInt(){
    num = parseInt(document.getElementById("num").value);
    rev = 0;
    while(num != 0) {
        d = num % 10;
        rev = rev*10+d;
        num = Math.floor(num/10);
    }
    document.getElementById('resultado2').innerHTML = rev;
}

function SumaProducto() {
    num = parseInt(document.getElementById("num").value);
    suma = 0;
    prod = 1;
    while (num != 0) {
        d = num % 10;
        if (d%2 == 0) suma += d;
        else prod *= d;
        num = Math.floor(num/10);
    }
    resp = `suma: ${suma}, producto: ${prod}`;
    document.getElementById('resultado2').innerHTML = resp;
}