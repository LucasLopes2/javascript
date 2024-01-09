 let num = document.querySelector('input#fnum')   
let litsa = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inlista(n,l){
        if(l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
}


    function adicionar(){
        if(isNumber(num.value) && !inlista(num.value, valores)){
            valores.push(Number(num.value))
        }else{
            alert("Valor inválido ou já encontrado na lista.")
        }
    }