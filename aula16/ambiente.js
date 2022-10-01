function parimp(n){
    if(n%2==0){
        return 'PAR'
    }else{
        return 'IMPAR'
    }
}

function soma(n1=0, n2=0){
    return Number(n1) + Number(n2)
}

let numero = 8
let teste = parimp(numero)
console.log(`O número ${numero} é ${teste}.`)
console.log(`${numero} + ${numero} = ${soma(numero, numero)}`)

let v = function(x){
    return x * 2
}

console.log(v(5))