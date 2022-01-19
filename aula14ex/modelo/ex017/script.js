function tabuada() {
    var num = parseInt(document.getElementById('number1').value)
    var tab = document.getElementById('seltab')
    if ( num == 0 || isNaN(num)){    
        alert('Erro! Digite um numero válido!')
    }else{
        tab.innerHTML = ''
        for(var c = 1;c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
       
    }


}