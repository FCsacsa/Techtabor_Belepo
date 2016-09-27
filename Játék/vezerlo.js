var jatekos;
var allas;
var vonalak;
var negyzetek;

function ujjatek () { //nulláz
  jatekos = "x";
  allas = {"x":0,"o":0};

  vonalak = new Array(13);
  for (var i = 0; i < vonalak.length; i++) {
    vonalak[i] = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0);
  }

  negyzetek = new Array(6);
  for (var i = 0; i < negyzetek.length; i++) {
    negyzetek[i] = new Array(0,0,0,0,0,0);
  }


}

ujjatek();

document.onclick = function (event) {
   var x = event.clientX;
   var y = event.clientY;
   var a = vonal(x,y);
   if (a[0] != undefined && a[1] != undefined) {
     behuz(a[0],a[1]);
   }
   var msg = "x:"+ allas.x+" o:"+allas.o+" A soron levo jatekos:"+jatekos;
   if (allas.x + allas.o == 36) {
     if (allas.x > allas.o) {
       msg = "Graulalok X nyert! (x:"+ allas.x+" o:"+allas.o+")"
     } else if (allas.x < allas.o) {
       msg = "Graulalok O nyert! (x:"+ allas.x+" o:"+allas.o+")"
     }else {
       msg = "Graulalok döntetlen! (x:"+ allas.x+" o:"+allas.o+")"
     }
   }
   Message.innerHTML = msg;
    }

var deltax = 207;
var deltay = 47;
var hossz = 60;
var csik1 = 7;
var csik2 = 53;
var erz1 = 9;
var erz2 = 51;


function vonal (x, y){ //kiszámolja, hogy melyik vonalra böktünk
  var sor, osz;
  var xpar, ypar;
  var xmaradek, ymaradek;
  x -= deltax;
  y -= deltay;
  console.log("valodi pozicio:"+x+" "+y);
  xpar = Math.floor(x / hossz);
  ypar = Math.floor(y / hossz);
  console.log("parok:"+xpar+ypar);
  xmaradek = x % hossz;
  ymaradek = y % hossz;
  console.log("maradekok:"+xmaradek+" "+ymaradek);
  if ((xmaradek < 11) && (ymaradek > 10)) {
    console.log("fuggoleges");
    sor = xpar * 2;
    osz = ypar * 2 + 1;
  }else if (xmaradek > 10 && ymaradek < 11) {
    console.log("vizszintes");
    sor = xpar * 2 + 1;
    osz = ypar * 2;
  }
  return [sor, osz];
}

function behuz (sor, osz){ //behuzza a vonalat
  var huzott = false;
  var egyx, egyy;
  var valt = 2;
  var csikx, csiky;
  var irany;
  var vonalszin = "blue";
  if (vonalak[sor][osz] == 0){
    vonalak[sor][osz] = 1;
    huzott = true;

    egyx = Math.floor(sor / 2);
    egyy = Math.floor(osz / 2);
    valt = jelolo(egyx, egyy, valt);
    console.log("1:"+valt+" x"+egyx+" y"+egyy);
    if ((sor % 2) == 0 && (egyx-1) > -1){
        valt = jelolo(egyx-1, egyy, valt);
        console.log("2a:"+valt+" x"+egyx+" y"+egyy);
        irany = "F";
    }else if ((sor % 2) == 1 && (egyy-1) > -1) {
        valt = jelolo(egyx, egyy-1, valt);
        console.log("2b:"+valt+" x"+egyx+" y"+egyy);
        irany = "V";
    }else if ((egyx-1) == -1 || (egyy-1) == -1) {
        valt -= 1;
        console.log("2c:"+valt+" x"+egyx+" y"+egyy);
        if ((sor % 2) == 1) { irany = "V"; } /*/U/*/ //vizszintes
        if ((sor % 2) == 0) { irany = "F"; } //fuggoleges

    }
    if (irany =="V") {
        csikx = deltax + (sor-1) * hossz / 2 + csik1;
        csiky = deltay + osz * hossz / 2;
        vonas = '<div style="position:absolute;left:'+ csikx +'px;top:'+ csiky +'px;width:'+ csik2 +'px;height:'+ csik1 +'px;background: '+ vonalszin +'"></div>';
        document.body.innerHTML += vonas ;
    } else if (irany =="F") {
        csikx = deltax + sor * hossz / 2;
        csiky = deltay + (osz-1) * hossz /2 + csik1;
        vonas = '<div style="position:absolute;left:'+ csikx +'px;top:'+ csiky +'px;width:'+ csik1 +'px;height:'+ csik2 +'px;background: '+ vonalszin +'"></div>';
        document.body.innerHTML += vonas ;
    }
  }
  console.log("3:"+valt+" x"+egyx+" y"+egyy);
  if (valt == 0) {
    if (jatekos == "x") {
      jatekos = "o";
    } else {
      jatekos = "x";
    }
  }
  return huzott;
}

function jelolo (x, y, v){ //bejeloli a négyzetet
  var jel;
  var csikx,csiky;
  csikx = deltax + x * hossz + csik1;
  csiky = deltay + y * hossz + csik1;
  if ( x == 6 || y == 6) {
    v -= 1;
  } else {
    negyzetek[x][y] += 1;
    console.log("egy negyzet:"+x+" "+y+" "+v+" "+negyzetek[x][y]);
    if (negyzetek[x][y] == 4) {
      if (jatekos == "x") {
        allas.x += 1;
        jel = '<div style="position:absolute;left:'+ csikx +'px;top:'+ csiky +'px;width:'+ csik2 +'px;height:'+ csik2 +'px;background-image: url(x.png)"></div>';
        document.body.innerHTML += jel ;
      }else {
        allas.o += 1;
        jel = '<div style="position:absolute;left:'+ csikx +'px;top:'+ csiky +'px;width:'+ csik2 +'px;height:'+ csik2 +'px;background-image: url(o.png)"></div>';
        document.body.innerHTML += jel ;
      }
    }else {
      v -= 1;
    }

  }

  return v;
}
