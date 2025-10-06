// console.log("1. Iniciando")

// //console.log("2. Executando")
// setTimeout(() => {
//     console.log("2. Executando")
// }, 3000)

// console.log("3. Finalizando")

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function assarPizza(){
//     console.log("Preparando a Pizza")
//     setTimeout(() => {
//         console.log("🍕 Sua Pizza Está Pronta!")
//     }, 3000)
// }

// assarPizza()
// console.log("Comendo a Pizza")

// --------------------------------------------------------------------------------- CALLBACK --------------------------------------------------------------------------

// function suco(parametro){
//     console.log(`Suco de ${parametro}`)
// }

// function suco2(){

// }

// suco(suco2)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function assarPizza(callback){
//     setTimeout(() => {
//         console.log("🍕 Sua Pizza Está Pronta!")
//         callback()
//     }, 3000)
// }

// function comerPizza(){
//     console.log("Comendo a Pizza")
// }

// console.log("Preparando a Pizza")
// assarPizza(comerPizza)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function pedirComida(callback){
//     setTimeout(() => {
//         console.log("Pedido pronto! 🍔")
//         callback()
//     }, 3000)
// }

// function comerComida(){
//     console.log("Comendo a comida")
// }

// pedirComida(comerComida)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function verificarResultado(callbackSucesso, callbackErro){
//     let result = 1 + 1

//     if(result == 1 + 1){
//         callbackSucesso()
//     }else{
//         callbackErro()
//     }
// }

// function sucesso(){
//     console.log("Uhuuuuuuuuuuuuuuuuuul! Número 2")
// }

// function erro(){
//     console.log("Ops! O número não é 2")
// }

// verificarResultado(sucesso, erro)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const verificarResultado = new Promise((resolve, reject) => {
//     let result = 1 + 1

//     if(result == 2){
//         resolve("Uhuuuuuuuuuuuuuuuuuul! Número 2")
//     } else {
//         reject("Ops! O número não é 2")
//     }
// })

// verificarResultado
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

const buscarUsuario = new Promise((resolve, reject) => {
    console.log("Buscando usuário no banco de dados... ⌛")
    setTimeout(() => {
        const encontrado = true
        if(encontrado){
            resolve({nome: "Matheus", idade: 20})
        } else {
            reject("Usuário não encontrado")
        }
    }, 3000)
})

buscarUsuario
    .then((res) => console.log(res.nome))
    .catch((err) => console.log(err))