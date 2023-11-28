function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasci')
    var res = document.getElementById('res')
    if(fano.value.length == 0){
        alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var radf = document.getElementsByName("sexo")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute('id', 'images')
    }
    if(radf[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //CRIANCA//
            img.setAttribute('src', 'kid(2).jpg')
        }else if(idade < 21){
            //jovem//
            img.setAttribute('src', 'adole.jpg')
        }else if (idade < 50){
            //adulto//
            img.setAttribute('src', 'adulto.jpg')
        }else {
            //idoso//
            img.setAttribute('src', 'idoso.jpg')
        }
        
    }else if(radf[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //CRIANCA//
            img.setAttribute('src', 'kid.jpg')
        }else if(idade < 21){
            //jovem//
            img.setAttribute('src', 'adole(2).jpg')
        }else if (idade < 50){
            //adulto//
            img.setAttribute('src', 'adulta.jpg')
        }else {
            //idoso//
            img.setAttribute('src', 'idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
    res.appendChild(img)
}
