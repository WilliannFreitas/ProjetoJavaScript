function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('AnoNascimento')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verefique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'imagens/menino.png')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/rapaz.png')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'imagens/senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'imagens/menina.png')
            }
            else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/moca.png')
            }
            else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher.png')
            }
            else {
                // Idoso
                img.setAttribute('src', 'imagens/senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}_