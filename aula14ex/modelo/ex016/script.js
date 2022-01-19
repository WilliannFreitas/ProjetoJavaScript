function contar(){
    var inicio = parseInt(document.getElementById('inicio').value)
    var fim = parseInt(document.getElementById('fim').value)
    var passo = parseInt(document.getElementById('passo').value)
    var res = document.getElementById('res')
    res.innerHTML = 'Contando: </br>' 
    
    if(inicio == 0 || fim == 0 || passo == 0 || isNaN(inicio) || isNaN(fim) || isNaN(passo) ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        if(passo == 0) {
            passo = 1
            window.alert('[ERRO] Passo inválido! passo considerado: 1')
        }
        // Contagem regressiva
        if(inicio >= fim) { 
            for(var c = inicio;c >= fim; c-=passo) {
                res.innerHTML += c + ' 🥦 '  
            }
        // Contagem crescente
        } else {
            for(var c = inicio;c <= fim; c+=passo) {
                res.innerHTML += c + ' 🥦 '
            }
        } 
        res.innerHTML += '🍔'
    }
}
