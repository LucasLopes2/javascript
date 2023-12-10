function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("nasci")
    var  res = document.getElementById("res")
    if(fano.value.length == 0){
        alert("Por favor , informe os dados abaixo!")
    }else{
        var radf = document.getElementsByName('sexo')
        var genero = ''
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto' )
    }if(radf[0].checked){
        genero = 'Homem'
    if(idade >= 0 && idade <16){
        //kid//
        img.setAttribute('src', 'foto-kidm.jpg')
    }else if(idade < 21){
        //jovem//
        img.setAttribute('src','foto-adolece.jpg')
    }else if(idade <50){
        //adulto//
        img.setAttribute('src', 'foto-adulto.jpg')
    }else{
        //idoso//
        img.setAttribute('src', 'foto-idoso.jpg')
    }
 }if(radf[1].checked){
        genero = 'Mulher'
      if(idade >=0 && idade <10){
        img.setAttribute('src', 'foto-kidf.jpg')
       }else if(idade <21){
        img.setAttribute('src', 'foto-adolece(2).jpg')
       }else if(idade < 50){
        img.setAttribute('src', 'foto-adulta.jpg')
       }else{
        img.setAttribute('src', 'foto-idosa.jpg')
       }
    
 }
    res.style.textAlign ='center'
    res.innerHTML =`Detectamos ${genero} com ${idade} anos`
     res.appendChild(img)
   
}
