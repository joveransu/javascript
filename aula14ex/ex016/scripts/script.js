function count(){
    var ini = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var pas = Number(document.getElementById('pas').value)

    if (pas == 0){
        alert('Passo inválido, considerando passo 1')
        pas = 1
    }

    if (!ini || !fim || !pas){
        document.getElementById('contagem').innerHTML = 'ERRO: Preencha todas caixas.'
    }else {
        var text = ''
        if (ini <= fim){
            while (ini <= fim){
                text += `\u{1F449} ${ini} `
                ini += pas
            }
            text += `\u{1F3F4}`
        } else {
            while (ini >= fim){
                text += `\u{1F449} ${ini} `
                ini -= pas
            }
            text += `\u{1F3F4}`
        }
        document.getElementById('contagem').innerHTML = text
    }
}