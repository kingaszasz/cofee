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
        orszag: 'CHI',
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
        orszag: 'CHI',
        erosseg: 9,
        keszlet: 3,
        ar: 2300,
        beszerz: 1600,
    },
];

// megkeresi a weboldalon keresőmezőbebeírt szórészletre az összes kávét
function keres() {
    var myKave = document.getElementById("kave").value.toLowerCase();
    var talalat = '';
    for (var i in kavek) {

        if (kavek[i].nev.toLowerCase().indexOf(myKave) > -1) {
            for (var j in kavek[i]) {
                talalat += `${j} : ${kavek[i][j]} <br>`;
            }
            talalat += `<br>`
        }
        if (talalat == '') {
            document.getElementById("kereses-eredmeny").innerHTML = 'nincs ilyen kávénk';
        } else {
            document.getElementById("kereses-eredmeny").innerHTML = talalat;
        }

    }
}

// kiíra a welbalbra az átlagérat és a legolcsóbb ill legdrágbb kávé típus összes tulajdonságát
var minAr = kavek[0];
var maxAr = kavek[0];
var osszAr = 0;
var atlagAr;
var minKave = '';
var maxKave = '';

for (var i in kavek) {
    if (minAr.ar > kavek[i].ar) {
        minAr = kavek[i];
    }
    if (maxAr.ar < kavek[i].ar) {
        maxAr = kavek[i];
    }
    osszAr += kavek[i].ar
}
atlagAr = osszAr / kavek.length;
document.getElementById("atlag").innerHTML = ` ${atlagAr.toFixed(2)} Ft/kg`;

//kiirom a legalacsonyabb árú kávé adatait
for (var i in minAr) {
    minKave += ` ${i} :   ${minAr[i]}  <br>`;
}
document.getElementById("min").innerHTML = minKave;

//kiirom a legalmagasabb árú kávé adatait
for (var i in maxAr) {
    maxKave += ` ${i} :   ${maxAr[i]}  <br>`;
}
document.getElementById("max").innerHTML = maxKave;