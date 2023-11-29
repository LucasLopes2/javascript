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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
    if(radf[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            //CRIANCA//
            img.setAttribute('src', 'foto-kidm.jpg')
        }else if(idade < 21){
            //jovem//
            img.setAttribute('src', 'foto-adolece.jpg')
        }else if (idade < 50){
            //adulto//
            img.setAttribute('src', 'foto-adulto.jpg')
        }else {
            //idoso//
            img.setAttribute('src', 'foto-idoso.jpg')
        }
        
    }else if(radf[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //CRIANCA//
            img.setAttribute('src', 'foto-kidf.jpg')
        }else if(idade < 21){
            //jovem//
            img.setAttribute('src', 'foto-adole (2).jpg')
        }else if (idade < 50){
            //adulto//
            img.setAttribute('src', 'foto-adulta.jpg')
        }else {
            //idoso//
            img.setAttribute('src', 'foto-idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
    res.appendChild(img)
}
