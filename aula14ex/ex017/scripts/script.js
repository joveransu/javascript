function showTabuada(){
    var num = Number(document.getElementById('num').value)
    if(!num || num.length == 0){
        alert('Digite um valor')
    }else{
        var lista = document.getElementById('lista')
        lista.innerHTML = ''//Limpar a lista
        for(var c = 1; c <= 10; c++){
            var newNum = document.createElement('option')
            newNum.innerHTML = `${c} X ${num} = ${c*num}`
            newNum.value = `item${c}`//Adicionar o valor que será mandado a ser selecionado na lista
            lista.appendChild(newNum)
        }
    }
}