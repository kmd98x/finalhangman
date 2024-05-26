const startSpel = document.querySelector(".zeroState button")
const zeroState = document.querySelector(".zeroState")
const spelRegels = document.querySelector(".spelRegels")

startSpel.addEventListener("click", startHetSpel)
spelRegels.addEventListener("click", weergeefSpelRegels)

function startHetSpel() {
  zeroState.classList.add("hidden")
}

function weergeefSpelRegels(){
    spelRegels.classList.toggle("uitgeklapt")
}