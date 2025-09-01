// let i = 1

// while (i <= 5){
//     console.log(`Contador: ${i}`);
//     i++;
// }

let senha = "1234";
let tentativa = prompt("Informe sua senha: ");

while (tentativa != senha){
    alert("Senha inválida, tente novamente!");
    tentativa = prompt("Informe sua senha: ");
}

alert("Senha correta, acesso liberado!");