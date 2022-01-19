var num = [5,3,9,1]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor de ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) 
let pos = num.indexOf(8)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 9 esta na posição ${pos}`)
}