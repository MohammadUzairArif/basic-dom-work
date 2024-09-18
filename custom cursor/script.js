var main = document.querySelector(".main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(e) {
    crsr.style.left = e.x + "px"
    crsr.style.top = e.y + "px"
})