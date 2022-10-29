function Revertir(){
    a = document.getElementById("numero").value;
    b = a.split('').reverse().join('');
    window.alert(b+"");
}

function Mayor(){
    a = document.getElementById("num1").value;
    b = document.getElementById("num2").value;
    c = document.getElementById("num3").value;
    let arr1 = [parseInt(a),parseInt(b),parseInt(c)];
    let mayor = arr1.reduce((max, x) => max > x ? max : x);
    window.alert(mayor+"");
}

function TercerMenor(){
    a = document.getElementById("num1").value;
    b = document.getElementById("num2").value;
    c = document.getElementById("num3").value;
    let arr1 = [parseInt(a),parseInt(b),parseInt(c)];
    arr1.sort((a,b)=>a-b);
    window.alert(arr1[2]+"");
}

function Convertir(){
    a = document.getElementById("grados").value;
    g = Math.floor(a);
    b = (a-g)*60;
    m = Math.floor(b);
    c = (b-m)*60;
    s = Math.round(c);
    window.alert("Grados: "+g+" Minutos: "+m+" Segundos: "+s);
}