let title = document.querySelector("h1")
let fundo = document.body
let foto = document.getElementById("foto")

function trocar(){
   title.innerText = "Azul Caneta"
   fundo.style.backgroundColor = "tomato"
   foto.setAttribute("src","https://s2.glbimg.com/gZrnzQkY70EZ2ZP0zwB689bUAak=/0x0:5184x3456/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/9/e/EYKMBXR72tNdkUAgmZzQ/azul-caneta.jpg")
}