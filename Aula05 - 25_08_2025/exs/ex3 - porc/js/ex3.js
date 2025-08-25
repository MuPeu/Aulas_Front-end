let num, porcent;

num = Number(prompt("Digite o valor do produto:"));
porcent = Number(prompt("Digite a porcentagem de desconto:"));

alert(`Produto, sem desconto, custa ${num} reais`);
alert(`A porcentagem de desconto, é de ${porcent}%`);
alert(`O valor do desconto, é ${(num * porcent) / 100} reais`);
alert(`O valor do produto, com desconto, é de ${num - ((num * porcent) /100)} reias`)