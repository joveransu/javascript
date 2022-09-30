function checkTime(){
    var agora = new Date()
    var hora = agora.getHours()
    var photo = document.getElementById('photo')
    var phoras = document.getElementById('phoras')
    var bg = document.getElementsByTagName('body')[0]
    if (hora > -1 && hora < 12){
        phoras.innerHTML = `Bom dia, são exatamente ${hora} horas!`
        photo.src = 'fotos/manha.jpg'
        bg.style.backgroundColor = '#bed0de'
    } else if (hora <= 18 ) {
        phoras.innerHTML = `Boa tarde, são exatamente ${hora} horas!`
        photo.src = 'fotos/tarde.jpg'
        document.body.backgroundColor = '#fa9500'
    } else {
        phoras.innerHTML = `Boa noite, são exatamente ${hora} horas!`
        photo.src = 'fotos/noite.jpg'
        bg.style.backgroundColor = '#9a7fb6'
    }
}