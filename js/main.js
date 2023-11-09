const arrNumeri = [];
randomNumbers();

// genero i 5 numeri casuali
function randomNumbers() {
    for(i = 0; i < 5; i++) {
        arrNumeri.push(Math.floor(Math.random() * 100) + 1);
    }
}

// nascondo i numeri
function hideNumbers() {
    document.getElementById("numeri").innerHTML = "";
}

document.getElementById("numeri").innerHTML = arrNumeri;

// invoco nascondi numeri dopo 30 secondi
setTimeout(hideNumbers, 30*1000);