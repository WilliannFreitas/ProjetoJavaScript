var num = document.querySelector('input#num')
var valoresadc = document.querySelector('select#valoresadc')
var res = document.querySelector('div#res')
var valores = []
n = Number

function isNumero(n) {
    if( n >=1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { 
    if(l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }

} 

function AdicionarNum() { 

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(num.value)
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        valoresadc.appendChild(item)
        res.innerHTML = ''
    }else{ 
        alert('Valor inválido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
             maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados</p>` 
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
    }
}