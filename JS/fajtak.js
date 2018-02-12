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

// listázzuk ki a kávékat erősség szerint
var light = '';
var mild = '';
var strong = '';

//tömbbe csoportosít
for (var i in kavek) {
    switch (kavek[i].erosseg) {
        case 1:
        case 2:
        case 3:
            light += `Név: ${kavek[i].nev} | Származás: ${kavek[i].orszag} | 
            Erősség: ${kavek[i].erosseg} | Ár: ${kavek[i].ar}<br>`;
            break;
        case 4:
        case 5:
        case 6:
            mild += `Név: ${kavek[i].nev} | Származás: ${kavek[i].orszag} | 
            Erősség: ${kavek[i].erosseg} | Ár: ${kavek[i].ar}<br>`;
            break;
        case 7:
        case 8:
        case 9:
            strong += `Név: ${kavek[i].nev} | Származás: ${kavek[i].orszag} | 
            Erősség: ${kavek[i].erosseg} | Ár: ${kavek[i].ar}<br>`;
            break;
        default:
            break;
    }
}

document.getElementById("light").innerHTML = light;
document.getElementById("mild").innerHTML = mild;
document.getElementById("strong").innerHTML = strong;