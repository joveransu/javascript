let array_num = []
let n = document.getElementById('n')
let div = document.getElementById('list-numbers')
let list = document.getElementById('listn')

function isNumero(n){
    if (Number(n) < 1 || Number(n) > 100){
        return false
    } else {
        return true
    }
}

function inArray(n, array){
    if (array.indexOf(n) != -1){
        return true
    } else {
        return false
    }
}

function somaArray(array){
    let tot = 0
    for(let tn=0; tn<array.length; tn++){
        tot += Number(array[tn])
    }
    return tot
}


function addNumber(){
    let num = Number(n.value)
    if (!isNumero(n)){
        return alert('Digite um valor entre 1 a 100')
    }

    if (inArray(num, array_num)){
        return alert('O número já foi selecionado.')
    }

    array_num.push(num)
    let newOption = document.createElement('option')
    newOption.value = num
    newOption.innerHTML = `Valor ${num} foi adicionado.`
    list.appendChild(newOption)

    div.innerHTML = ''
    n.value = ''
    n.focus()
}

function showData(){
    if( array_num.length == 0){
        return alert('Adicione algum número a lista')
    }

    div.innerHTML = ''

    div.innerHTML += `<p><strong>Ao todo temos ${array_num.length} numeros!</strong></p>`

    let maior = array_num[0]
    let menor = array_num[0]
    for(let pos in array_num){
        if(maior < array_num[pos])
            maior = array_num[pos]
        if(menor > array_num[pos])
            menor = array_num[pos]
    }

    div.innerHTML += `<p><strong>O menor numero é ${menor}!</strong></p>`
    div.innerHTML += `<p><strong>O maior numero é ${maior}!</strong></p>`
    div.innerHTML += `<p><strong>A soma de todos números é ${somaArray(array_num)}!</strong></p>`
    div.innerHTML += `<p><strong>A média dos valores é ${somaArray(array_num)/array_num.length}!</strong></p>`
}