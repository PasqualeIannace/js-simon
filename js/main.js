const arrNumeri = [];
const myNumbers = [];
randomNumbers();

// genero i 5 numeri casuali
function randomNumbers() {
    for(i = 0; i < 5; i++) {
        arrNumeri.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log("numeri nascosti", arrNumeri);
}

// nascondo i numeri
function hideNumbers() {
    document.getElementById("numeri").innerHTML = "";
}

// chiedo i numeri all'utente
function askNumbers() {
    for(i = 0; i < 5; i++) {
        myNumbers.push(parseInt(prompt("Che numero hai visto?")));
    }
    // pusho gli array al confronto
    checkDifference(arrNumeri, myNumbers);
}

// verifico i numeri random con quelli dell'utente
function checkDifference(mathArray, mioArray) {

    const numeriErrati = [];
    const numeriCorretti = [];

    let counter = 0;
    while(counter < mathArray.length) {
        numDaVerificare = mioArray[counter];
        

        if(mathArray.indexOf(numDaVerificare) === -1) {
            console.log("Numeri errati", numDaVerificare);
            numeriErrati.push(numDaVerificare);

            counter++;
        } else {
            console.log("Trovato doppione", numDaVerificare);
            numeriCorretti.push(numDaVerificare);
            counter++;
        }

        console.log("Array errori:", numeriErrati);
        console.log("Array numeri corretti:", numeriCorretti);
    }


    // for(i = 0; i < mathArray.length; i++) {

    //     // if(mathArray.indexOf(mioArray) === -1) {
    //     //     if(mathArray[i] == mioArray[i])
    //     //     console.log("Trovato math", mathArray[i]);
    //     //     console.log("Trovato mio", mioArray[i]);
    //     // } else {
    //     //     console.log("NON TROVATO", mathArray[i]);

    //     // }
    // }
}

document.getElementById("numeri").innerHTML = arrNumeri;

// invoco nascondi numeri dopo 30 secondi
// setTimeout(hideNumbers, 30*1000);
setTimeout(hideNumbers, 2*1000);
setTimeout(askNumbers, 2*1010);