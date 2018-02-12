/*2. Kávé leltár
Egészítsd ki a kávékról tárolt adataidat a kilónkénti beszerzési árukkal. 
Feltételezzük, hogy mindig ugyanannyiért tudjuk beszerezni a kávét 
ebben az idealizált világban. Ezután írd ki az összes készleten 
levő kávé értékét összesítve egy új admin menüpontban.*/

// a kávé tömböm:
var kavek = [{
        nev: 'Alma',
        orszag: 'HU',
        erosseg: 1,
        keszlet: 10,
        ar: 2200,
        beszerz: 1100,
    },
    {
        nev: 'Bab',
        orszag: 'RO',
        erosseg: 5,
        keszlet: 1,
        ar: 2500,
        beszerz: 1200,
    },
    {
        nev: 'Colos',
        orszag: 'BRA',
        erosseg: 2,
        keszlet: 8,
        ar: 2900,
        beszerz: 1600,
    },
    {
        nev: 'Dan',
        orszag: 'IND',
        erosseg: 8,
        keszlet: 2,
        ar: 2100,
        beszerz: 1100,
    },
    {
        nev: 'Gábor',
        orszag: 'HU',
        erosseg: 4,
        keszlet: 0,
        ar: 4500,
        beszerz: 2800,
    },
    {
        nev: 'Habos',
        orszag: 'CHI',
        erosseg: 7,
        keszlet: 11,
        ar: 2800,
        beszerz: 1800,
    },
    {
        nev: 'Sor',
        orszag: 'RO',
        erosseg: 9,
        keszlet: 3,
        ar: 2300,
        beszerz: 1600,
    },
    {
        nev: 'Kropor',
        orszag: 'HU',
        erosseg: 5,
        keszlet: 10,
        ar: 8000,
        beszerz: 5600,
    }
];

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