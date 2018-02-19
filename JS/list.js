var kavek = [{
        nev: 'Alma',
        orszag: 'Magyarország',
        erosseg: 1,
        keszlet: 10,
        ar: 2200,
        beszerz: 1100,
    },
    {
        nev: 'Bab',
        orszag: 'Románia',
        erosseg: 5,
        keszlet: 1,
        ar: 2500,
        beszerz: 1200,
    },
    {
        nev: 'Colos',
        orszag: 'Brazília',
        erosseg: 2,
        keszlet: 8,
        ar: 2900,
        beszerz: 1600,
    },
    {
        nev: 'Dan',
        orszag: 'India',
        erosseg: 8,
        keszlet: 2,
        ar: 2100,
        beszerz: 1100,
    },
    {
        nev: 'Gábor',
        orszag: 'Magyarország',
        erosseg: 4,
        keszlet: 0,
        ar: 4500,
        beszerz: 2800,
    },
    {
        nev: 'Habos',
        orszag: 'Chile',
        erosseg: 7,
        keszlet: 11,
        ar: 2800,
        beszerz: 1800,
    },
    {
        nev: 'Sor',
        orszag: 'Románia',
        erosseg: 9,
        keszlet: 3,
        ar: 2300,
        beszerz: 1600,
    },
    {
        nev: 'Kropor',
        orszag: 'Magyarország',
        erosseg: 5,
        keszlet: 10,
        ar: 8000,
        beszerz: 5600,
    }
];


// sima ország szerint sorbarendezett lista
//először egy tömbbe gyűjti a 

var countr;
for (var i = 0; i < kavek.length; i++) {
    for (var j = i + 1; j < kavek.length; j++) {

        if (kavek[i].orszag > kavek[j].orszag) {
            temp = [kavek[i], kavek[j]];
            kavek[i] = temp[1];
            kavek[j] = temp[0];
        } else if (kavek[i].orszag == kavek[j].orszag) {
            if (kavek[i].nev.localeCompare(kavek[j].nev) < 0) {
                temp = [kavek[i], kavek[j]];
                kavek[i] = temp[1];
                kavek[j] = temp[0];
            }

        }
    }
}

var list = '';
for (var i in kavek) {
    for (var j in kavek[i]) {
        list += `${j} : ${kavek[i][j]} <br>`;
    }
    list += `<br>`
}

document.getElementById('list').innerHTML = list;


// országonként csoportosított lista

var list2 = '';
for (var i = 0; i < kavek.length; i++) {
    list2 += `${kavek[i].orszag} <br>`;
    list2 += `Név: ${kavek[i].nev} | Erősség: ${kavek[i].erosseg} | Ár: ${kavek[i].ar}<br>`;

}


document.getElementById('list2').innerHTML = list2;