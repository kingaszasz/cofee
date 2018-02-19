// sima ország szerint sorbarendezett lista
//először egy tömbbe gyűjti a 

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

var list2 = `${kavek[0].orszag} <br>`;
list2 += `Név: ${kavek[0].nev} | Erősség: ${kavek[0].erosseg} | Ár: ${kavek[0   ].ar}<br>`;
for (var i = 1; i < kavek.length; i++) {
    var j = i - 1;
    console.log(kavek[i].orszag);
    console.log(kavek[j].orszag);
    if (kavek[i].orszag == kavek[j].orszag) {
        list2 += `Név: ${kavek[i].nev} | Erősség: ${kavek[i].erosseg} | Ár: ${kavek[i].ar}<br>`;
    } else {
        list2 += `${kavek[i].orszag} <br>`;
        list2 += `Név: ${kavek[i].nev} | Erősség: ${kavek[i].erosseg} | Ár: ${kavek[i].ar}<br>`;
    }

}

document.getElementById('list2').innerHTML = list2;