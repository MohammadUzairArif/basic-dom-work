var bulbon = document.querySelector(".bulbOn")
var bulboff = document.querySelector(".bulbOff")
var btnOn = document.querySelector("#btnOn")
var btnOff = document.querySelector("#btnOff")
btnOff.addEventListener("click", function() {
    bulbon.style.display = "none"
    bulboff.style.display = "block"

})

btnOn.addEventListener("click", function() {
    bulboff.style.display = "none"
    bulbon.style.display = "block"

})



