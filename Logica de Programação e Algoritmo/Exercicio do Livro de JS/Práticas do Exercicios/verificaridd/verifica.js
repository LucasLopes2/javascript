function verificar(){
    var data = new Date()
    var ano =  data.getFullYear()
    var dano = document.getElementById('nasci')
    var res = document.getElementById('res')
    if(dano.value.length == 0){
        alert("{ERRO} Verifique seus dados e tente novamente!")
    }else{
        var radf = document.getElementsByName("rads")
        var idade = ano - Number(dano.value)
        var genero = ''
        var img = document.createElement('img')
         img.setAttribute('id', 'foto')
    }
    if(radf[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //kid//
            img.setAttribute('src', 'foto-kidm.jpg')
        }else if(idade < 21) {
            //jovem//
            img.setAttribute("src", 'foto-adolece.jpg')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'foto-adulto.jpg')
        }else{
            //idoso/
            img.setAttribute('src', 'foto-idoso.jpg')
        }
    }else if(radf[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //kid//
            img.setAttribute('foto-kidf.jpg')
        }else if(idade <= 21) {
            //jovem//
            img.setAttribute('src', 'foto-adole (2).jpg')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'foto-adulta.jpg')
        }else{
            //idoso/
            img.setAttribute('src', 'foto-idosa.jpg')
        }

       
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    res.appendChild(img)
}