//Se preço for maior que 100, aplica desconto de 10%, caso contrário, mantém o preço.

let price = 150
let discoumt = 0.1 //10%
let result = price

//Exemplo
if (price > 100){
    console.log(result = price * (1 - discoumt))
    console.log(`O preço, com desconto, é: ${result}`)
} else {
    console.log(`Produto não recebe desconto. O preço é: ${price}`)
}

//Com If e Else 
if (price > 100){
    result = price - (price * discoumt)
    console.log(`O preço, com desconto, é: ${result}`)
} else {
    console.log(`Produto não recebe desconto. O preço é: ${price}`)
}

//Com console.log
result = ((price > 100) && (price * (1 - discoumt))) || price
console.log(result)