// Desafio 02 - Média da turma
// 
/* 
    Crie um array [] com 5 notas
    - Utilize um loop para:
        - Somar todas a notas
        - Calcular a média
    Mostrar no console/output o seguinte:
    Média da turma: 10.0
*/
// 1. Criação do array com 5 notas
let notas = [10.0, 9, 7, 6, 10];

// 2. Loop para somar todas as notas
let somar = 0
for (resultado = 0; resultado <= notas.length; resultado++) {
  somar =+ notas[resultado];
}
/// paramos na aula aqui acima: ///



// 3. Cálculo da média
const media = soma / notas.length;

// 4. Exibição no console
console.log(`Média da turma: ${media.toFixed(1)}`);