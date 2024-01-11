function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    if(num.value.length == 0){
        alert("Digite um número para gerar a Tabuada.")
    }else{
        let c = 1
        let n = Number(num.value)
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}