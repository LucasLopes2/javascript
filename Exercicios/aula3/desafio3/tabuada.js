function tabuada(){
    let txt = document.getElementById("txtn")
    let tabu = document.getElementById("seltab")
    if(txt.value.length == 0){
        alert("Por favor, digite um número!")
    }else{
        var n = Number(txt.value)
        var c = 1
        tabu.innerHTML = ''
    }while(c <= 10){
        let item = document.createElement("option")
        item.text = `${c} x ${n} = ${c*n}`
        tabu.appendChild(item)
        c++
        
    }
}