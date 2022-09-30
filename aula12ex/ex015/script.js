function showImage() {
    var data = new Date()
    var agora = data.getFullYear()
    var nasci = document.getElementById('idade').value

    if(nasci > agora){
        alert('O ano que você digitou é inválido.')
        return true
    }

    var sexo = document.getElementById('m').checked //Se true, ele é homem, se não, mulher]
    var res = document.getElementById('res')
    var idade = Number(agora) - Number(nasci)
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'photo')

    if (sexo){
        genero = 'Homem'
        if(idade < 18){
            //Criança
            img.setAttribute('src', 'criancaM.jpg')
        } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'ansu.jpg')
        } else {
            //Velho
            img.setAttribute('src', 'idosoM.jpg')
        }

    } else {
        genero = 'Mulher'
        if(idade < 18){
            //Criança
            img.setAttribute('src', 'criancaF.jpg')
        } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'adultoF.jpg')
        } else {
            //Velho
            img.setAttribute('src', 'idosoF.jpg')
        }
    }
    
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos <strong>${genero}</strong> de <strong>${idade}</strong> anos de idade.`
    //Ira adicionar a imagem apos o res (tag paragrafo)
    res.appendChild(img)
}