let num = [2, 3, 7]
num[3] = 7
num.push(5)//Adiciona na ultima vaga

console.log(`Nosso vetor tem ${num.length} e é ${num}`)
num.sort()//Coloca em ordem
console.log(num)

for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let n in num){
    console.log(`Valores ${num[n]}`)
}

num.indexOf(7) // retorna a posição do 7 no vetor
num.indexOf(3) // retorna -1, pois 3 não ta na lista

let num_7 = num.indexOf(7)
console.log(`O numero 7, ta na posição ${num_7}`)