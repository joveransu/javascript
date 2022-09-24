function checkTime(){
    var agora = new Date()
    var hora = agora.getHours()
    var photo = document.getElementById('photo')
    var phoras = document.getElementById('phoras')
    if (hora > -1 && hora < 12){
        phoras.innerHTML = `Bom dia, são exatamente ${hora} horas!`
        photo.src = 'fotos/manha.jpg'
    } else if (hora <= 18 ) {
        phoras.innerHTML = `Boa tarde, são exatamente ${hora} horas!`
        photo.src = 'fotos/tarde.jpg'
    } else {
        phoras.innerHTML = `Boa noite, são exatamente ${hora} horas!`
        photo.src = 'fotos/noite.jpg'
    }
}