function showTabuada(){
    var num = Number(document.getElementById('num').value)
    if(!num){
        alert('Digite um valor')
    }else{
        var lista = document.getElementById('lista')
        for(var c = 1; c < num+1; c++){
            var newNum = document.createElement('li')
            newNum.innerHTML = `${c} X ${num} = ${c*num}`
            lista.appendChild(newNum)
        }
    }
}