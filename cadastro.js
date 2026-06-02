// Desafio 01 - Cadastro de Pessoa

/*
Crie um objeto chamado pessoa contendo:
- nome
- idade
- cidade

Após a criação:
- Altere a idade
- Adicione uma profissão
- Remova a cidade

No fim, exiba o objeto final.
*/
const pessoa = {
    nome: "Miguel", 
    idade: 4, 
    cidade: "Capanema"}

console.log(pessoa);
console.log(pessoa.cidade);
console.log(pessoa.idade);

pessoa.profissão = "DEV"; // Adiciona uma nova propriedade
pessoa.idade = 5; // Atualiza caso existir

delete pessoa.cidade;
console.log(pessoa);
