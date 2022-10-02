let amigo = {nome:'José',
sexo:'M',
peso:85.4,
engordar(p=0){
    console.log(`Engordou ${p}Kg.`)
    this.peso += p
}}

console.log(`${amigo.nome} pesava ${amigo.peso}.`)
amigo.engordar(2)
console.log(`${amigo.nome} pesava ${amigo.peso}.`)
