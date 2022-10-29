
function CondicionalDoble(){
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let c = parseInt(document.getElementById("num3").value);
  let d = parseInt(document.getElementById("num4").value);
  let e = parseInt(document.getElementById("num5").value);
  let ma = a;

  if(a>b){
    if (a>c){
      if (a>d){
        if (a>e){
          ma = a;
        }
      }
    }
  }
  else{
    if(b>c){
      if(b>d){
        if(b>e){
          ma = b;
        }
      }
    }
    else{
      if(c>d){
        if(c>e){
          ma = c;
        }
      }
      else{
        if(d>e){
          ma = d;
        }
        else{
          ma = e;
        }
      }
    }
  }
  document.getElementById("mayor").innerHTML=ma;
}