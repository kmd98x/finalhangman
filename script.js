const startSpel = document.querySelector(".zeroState button")
const zeroState = document.querySelector(".zeroState")
const spelRegels = document.querySelector(".spelRegels")
const keyboardButtons = document.querySelectorAll(".keyboard button")
const letters = document.querySelectorAll(".geradenWoord p")
const spelAfbeeldingen = document.querySelectorAll(".spelAfbeeldingen img")
const eindstand = document.querySelector(".eindstand")
const opnieuwSpelenButton = document.querySelector(".eindstand button")
const eindstandH = document.querySelector(".eindstand h3")
const eindstandP = document.querySelector(".eindstand p")
const blijGeluid = document.querySelector (".blijGeluid")
const verdrietigGeluid = document.querySelector (".verdrietigGeluid")
const woorden = [
    "hallo",
    "vloer",
    "droom",
    "tafel",
    "appel",
    "stoel",
    "vogel",
    "boter",
    "druif",
    "klein",
    "lente",
    "gelei",
    "harde",
    "aarde",
    "liefs",
    "kaars",
    "fiets",
    "brood",
    "smaak",
    "regen",
    "winst",
    "klank",
    "bloem",
    "schat",
]

let kansen = 10
let hetRaadwoord = woorden[Math.floor(Math.random() * woorden.length)].split("")
console.log(hetRaadwoord)

function startHetSpel() {
    zeroState.classList.add("hidden")
}

function weergeefSpelRegels() {
    spelRegels.classList.toggle("uitgeklapt")
}

function weergeefKansen() {
    const aantalKansen = (document.querySelector(".aantalKansen").textContent =
        "Aantal kansen: " + kansen)
}

function voegDeLetterToe(hetRaadwoord, kleineLetter) {
    let gekozenLetters = []

    //hetRaadwoord is al gesplitst in regel 35. We gaan door het hetRaadwoord en kijken vervolgens of het kleineletter in het hetRaadwoord bestaat. Zo ja, dan plaatsen we de kleineLetter op de juiste plek mbv letters[i]. De i zegt welke positie hij krijgt.
    hetRaadwoord.forEach(function (letter, i) {
        if (letter === kleineLetter) {
            // console.log(kleineLetter)
            //console.log(i)
            letters[i].textContent = kleineLetter
            //console.log(letters[i])
        }
    })

    letters.forEach(function (letter) {
        gekozenLetters.push(letter.textContent)
    })

    //console.log(gekozenLetters)

    if (gekozenLetters.join("") === hetRaadwoord.join("")) {
        geefResultaat("Hoera", "U heeft gewonnen")
        blijGeluid.play()
        //console.log("gewonnen")
    }
    //console.log(gekozenLetters.join(""))
}

function voegDeAfbeeldingToe() {
    spelAfbeeldingen[kansen].classList.add("weergeefAfbeelding")
    //console.log(afbeeldingen)
}

function opnieuwSpelen() {
    verdrietigGeluid.currentTime = 0
    verdrietigGeluid.pause()
    hetRaadwoord = woorden[Math.floor(Math.random() * woorden.length)].split("")
    console.log(hetRaadwoord)

    eindstand.classList.add("verborgen")
    kansen = 10
    weergeefKansen()

    spelAfbeeldingen.forEach(function (afbeelding) {
        afbeelding.classList.remove("weergeefAfbeelding")
    })

    keyboardButtons.forEach(function (button) {
        button.classList.remove("geklikt")
    })

    letters.forEach(function (letter) {
        letter.textContent = "__"
        console.log(letter)
    })
}

function geefResultaat(titel, tekst) {
    
    eindstandH.textContent = titel
    eindstandP.textContent = tekst
    opnieuwSpelenButton.addEventListener("click", opnieuwSpelen)
    eindstand.classList.remove("verborgen")
}

keyboardButtons.forEach(function (button) {
    function checkDeLetters(event) {
        event.preventDefault()

        const kleineLetter = button.textContent.toLowerCase()

        if (!button.classList.contains("geklikt")) {
            button.classList.add("geklikt")

            if (hetRaadwoord.includes(kleineLetter)) {
                voegDeLetterToe(hetRaadwoord, kleineLetter)

                // console.log(kleine letter bestaat in gekozen woord)
            } else {
                kansen--
                weergeefKansen()
                //console.log(kansen)

                if (kansen < 1) {
                    geefResultaat("Helaas", 'U heeft verloren. Het juiste woord was ' +'"'+ hetRaadwoord.join("") +'"' )
                    verdrietigGeluid.play()
                }

                voegDeAfbeeldingToe()
                //console.log("Kleine letter bestaat niet in gekozen woord")
            }
        }
    }
    button.addEventListener("click", checkDeLetters)
})

startSpel.addEventListener("click", startHetSpel)
spelRegels.addEventListener("click", weergeefSpelRegels)

/*
==================================================================
===========================Bronnen================================
================================================================== 
*/

//PREVENT DEFAULT: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault -

//INCLUDES: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes?retiredLocale=nl

//AUDIO: https://stackoverflow.com/questions/9419263/how-to-play-audio 

//AUDIO STOPPEN: https://stackoverflow.com/questions/14834520/html5-audio-stop-function


//https://www.youtube.com/watch?v=mN7ai6ql8bQ (sad sound effect)

//https://www.youtube.com/watch?v=i75GQG7YMu8 (happy sound effect)

