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