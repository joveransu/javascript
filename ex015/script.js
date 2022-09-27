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
    var div = document.getElementById('photo')

    if (sexo){
        res.innerHTML = `Detectamos um <strong>Homem</strong> de <strong>${idade}</strong> anos de idade.`
        
        if(idade < 18){
            //Criança
            div.innerHTML = '<img src="ansu.jpg" alt="imagem.jpg"></img>'
        } else if(idade < 50){
            //Adulto
            div.innerHTML = '<img src="ansu.jpg" alt="imagem.jpg"></img>'
        } else {
            //Velho
            div.innerHTML = '<img src="ansu.jpg" alt="imagem.jpg"></img>'
        }

    } else {
        res.innerHTML = `Detectamos uma <strong>Mulher</strong> de <strong>${idade}</strong> anos de idade.`
        if(idade < 18){
            //Criança
            div.innerHTML = '<img src="ansu.jpg" alt="imagem.jpg"></img>'
        } else if(idade < 50){
            //Adulto
            div.innerHTML = '<img src="ansu.jpg" alt="imagem.jpg"></img>'
        } else {
            //Velho
            div.innerHTML = '<img src="ansu.jpg" alt="imagem.jpg"></img>'
        }
    }
    
}