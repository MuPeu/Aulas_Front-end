let num, porcent;

num = Number(prompt("Digite um número:"));
porcent = Number(prompt("Digite uma porcentagem:"));

alert(`${porcent}% de ${num}, é ${(num * porcent) / 100}`);