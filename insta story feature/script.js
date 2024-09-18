var arr = [
    {
        dp: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1579505168827-6598731a17ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluc3RhJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D",
        story: "https://images.unsplash.com/photo-1709769307207-b1564c8354ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluc3RhJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp: "https://media.istockphoto.com/id/1324665776/photo/photo-of-magnificent-woman-20s-with-long-brown-hair-wearing-summer-clothing-smiling-to-you.webp?a=1&s=612x612&w=0&k=20&c=mhcXgpypwYHIMGYCFPiw4Z26ZrJEtWq2PeMoKyc94xM=",
        story: "https://media.istockphoto.com/id/1391391284/photo/cheerful-woman-with-arms-outstretched.jpg?s=612x612&w=0&k=20&c=NkSsMsMC6ptk6q-XJytoJozqpi-C7EISgKreFbrKymU="
    },
    {
        dp: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        story: "https://plus.unsplash.com/premium_photo-1682095661711-f5d67d0e75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8"
    }
]

var stories = document.querySelector(".stories")
var clutter = ""
arr.forEach(function(elem,idx){
    console.log(elem,idx)
    clutter += ` <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

stories.innerHTML = clutter
stories.addEventListener("click",function(dets){
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
         document.querySelector(".full-screen").style.display = "none"
    },2000)
});