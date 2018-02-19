/*2. Kávé leltár
Egészítsd ki a kávékról tárolt adataidat a kilónkénti beszerzési árukkal. 
Feltételezzük, hogy mindig ugyanannyiért tudjuk beszerezni a kávét 
ebben az idealizált világban. Ezután írd ki az összes készleten 
levő kávé értékét összesítve egy új admin menüpontban.*/

//ellenőrzi a jelszót, ha helyes kiadja a leltár adatokat
var adminPass = "xxx";
var osszErtek = 0;
var osszMennyi = 0;
var rendelniKell = [];
var kiirRendeles = '';

function ellenoriz() {
    var userPass = document.getElementById("pass").value;
    console.log(userPass, adminPass);
    if (adminPass == userPass) {
        document.getElementById("hietelesitesEredmeny").innerHTML = 'Köszönöm, a jelszó helyes'
        for (var i in kavek) {
            console.log(kavek[i].keszlet);
            console.log(kavek[i].beszerz);

            osszErtek += kavek[i].keszlet * kavek[i].beszerz;
            osszMennyi += kavek[i].keszlet
            if (kavek[i].keszlet < 3) {
                rendelniKell.push(kavek[i]);

            }
        }
        document.getElementById("keszlet-ertek").innerHTML = osszErtek + " Ft";
        document.getElementById("keszlet-mennyiseg").innerHTML = osszMennyi + " kg";
        for (var k in rendelniKell) {
            for (var j in rendelniKell[k]) {
                kiirRendeles += `${j} :  ${rendelniKell[k][j]} <br>`;
            }
            kiirRendeles += `<br>`;
        }


        document.getElementById("rendelj").innerHTML = kiirRendeles;
    } else {
        document.getElementById("hietelesitesEredmeny").innerHTML = 'Helytelenjelszó, próbálja újra'
    }
}