function verificar(){
    var data = new Date()
    var anual = data.getFullYear()
    var info = document.getElementById("nasci")
    var res = document.getElementById("res")
    if(info.value.length == 0){
        alert("Por favor , digite o seu ano de nascimento!")
    }else{
        var radf = document.getElementsByName("sexo")
        var genero  = ''
        var idade = anual - Number(info.value)
        var img = document.createElement("img")
        img.setAttribute('id','foto')

        if(radf[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 12){
                img.setAttribute("src", 'foto-kidm.jpg')
            }else if(idade <= 18){
                img.setAttribute("src", 'foto-adolece.jpg')
            }else if(idade <= 45){
                img.setAttribute("src", 'foto-adulto.jpg')
            }else{
                img.setAttribute("src", 'foto-idoso.jpg')
            }
        }else if(radf[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 12){
                img.setAttribute("src", 'foto-kidf.jpg')
            }else if(idade <=18){
                img.setAttribute("src", 'foto-adole (2).jpg')
            }else if(idade <=45){
                img.setAttribute("src", 'foto-adulta.jpg')
            }else{
                img.setAttribute("src", 'foto-idosa.jpg')
            }
        }
    
    res.style.textAlign = "Center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    }
}
    