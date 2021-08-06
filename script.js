let poging = 5

// promt voor nummer van gebruiker

// meld aan gebruiker met alert


// vraag gebruiker om naam

const naam = prompt("Welkom wat is you naam?");

// begroet gebruiker
alert(`Hey ${naam}!`);

const minNumber = prompt(`Voer het kleinste getal uit waar je tussen wil raden`)
const maxNumber = prompt("Voer het grootste getal uit waar je tussen wil raden")
let getalGebruiker = prompt( `Voer een nummer in van ${minNumber} tot ${maxNumber} om te beginnen met raden...`)


// Maak een randum getal aan tussen 0/25
const getRandomNumber = function(){
    let number = Math.floor(Math.random() * maxNumber + 1)
    return number;
}

let randomNumber = getRandomNumber()

// controleer als nummer correct is zo ja laat dit aan gebruiker zien

// en neem afscheid van de gebruiker
let checkForNumber = function(){
    poging--
    if (getalGebruiker == randomNumber){
        alert(`Gefeliciteerd ${naam} je hebt gewonnen`)
        alert(`Dag ${naam}. Tot de volgende keer!`)
    } else if (poging > 0){
        nieuwePoging() 
    } else alert(`Dat is niet correct, u heeft geen pogingnen meer over. Het Spel is afgelopen`)
}

const nieuwePoging = function(){
    alert(`Dat is niet correct, u heeft nog ${poging} over`)
    {getalGebruiker = prompt( `Voer een nummer in van ${minNumber} tot ${maxNumber} om te beginnen met raden...`)}
    checkForNumber()
}

if(randomNumber >= minNumber && randomNumber <= maxNumber){
    checkForNumber()
} else randomNumber = getRandomNumber()

// is nummer niet correct laat gebruiker opnieuw raden



