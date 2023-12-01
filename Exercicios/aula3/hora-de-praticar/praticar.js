function contar(){
var inicio = document.getElementById('inici')
var end = document.getElementById('fins')
var passos = document.getElementById("nu")
var res = document.getElementById('res')
if(inicio.value.length == 0 || end.value.length == 0 || passos.value.length == 0){
   res.innerHTML = "Impossivel contar!"
}else{
    res.innerHTML = 'Contando...'
    let i = Number(inici.value)
    let f = Number(fins.value)
    let p = Number(nu.value)
    //CONTAGEM CRESCENTE//
    if(i < f){
         for(let c = i; c <= f; c += p){
        res.innerHTML += `${c} `
    }
    //CONTAGEM REGRESSIVA//
    }else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} `
        }
    }
  

}
 res.innerHTML += `${c}`
}