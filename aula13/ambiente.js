function newLine(){
    console.log(' ')
    console.log(' ')
}

var c = 1
while (c <= 10){
    console.log(`Passo ${c}`)
    c++
}

newLine()

var c = 1
do {
    console.log(`Volta ${c}`)
    c++
}while(c <= 10)

newLine()

for(var d=1; d <= 10; d++){
    console.log(`Loop ${d}`)
}