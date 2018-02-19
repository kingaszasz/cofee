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