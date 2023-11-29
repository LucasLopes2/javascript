function carregar(){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 8 && hora < 12){
    img.src = 'imgs/tarde.jpg'
    document.body.style.background = "#B7752B"
}else if(hora >= 12 && hora <= 18){
   img.src = 'imgs/tarde2.jpg'
   document.body.style.background = "#FC8064"
}else{
    img.src = 'imgs/noite.jpg'
    document.body.style.background = '#233740'
}


}


