
var digitar = require(`prompt-sync`)({sigint:true});
// Método visual 
console.log('================');
console.log('calculo IMC');
console.log('================');

// Coletando dados do Usuário 

nome = (digitar('Digite seu nome: '));
const peso = parseFloat(digitar('Digite seu peso em (kg): '));
const altura = parseFloat(digitar('Digite seu altura em (Metros): '));
console.clear()

// Método visual 

console.log('================');
console.log('calculo IMC');
console.log('================');
//calculando o  e xibindo o valor do IMC do Usuário

const IMC = (peso / (altura * altura)).toFixed(2);
console.log(`Seu IMC é igual a ${IMC}`);

//condições para definir o resultado através do IMC do usuário

if(IMC >= 18.5 && IMC <= 25){
  console.log(`Seu peso está ideal!`);
} else {
    console.log(`seu peso está fora do ideal!`);

}
// Método visual 
console.log('================');
