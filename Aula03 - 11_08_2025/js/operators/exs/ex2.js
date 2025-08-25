//Status = Média >= 7 -> "Aprovado"; >= 5 -> "Recuperação"; < 5 -> "Reprovado"

let avl1 = Math.floor(Math.random() * 10)
let avl2 = Math.floor(Math.random() * 10)
let avl3 = Math.floor(Math.random() * 10)
let media = (avl1 + avl2 + avl3) / 3

//Com If, Else If e Else
if (media >= 7){
    console.log(`Média: ${media.toFixed(2)} - Aprovado`)
}
else if (media >= 5){
    console.log(`Média: ${media.toFixed(2)} - Recuperação`)
}
else if (media < 5){
    console.log(`Média: ${media.toFixed(2)} - Reprovado`)
}
else {
    console.log("Erro! Nota Inválida.")
}

//Com console.log
let result = (media >= 7 && "Aprovado") || (media >= 5 && "Recuperação") || (media < 5 && "Reprovado") || "Erro! Nota Inválida."