// Interação com o Usuário 
var digitar = require(`prompt-sync`)({sigint:true});

// Declarando variáveis
valor = (digitar('Digite o valor: '));

Nprimo(valor)

//Funções e exibindo o resultado

function Nprimo(limite){
   for(let numero = 2; numero <= limite; numero++){
       if(Nprimo1(numero))console.log(numero);
       }

   }
function Nprimo1(numero){
     for(let divisor = 2; divisor < numero; divisor++){
         if(numero % divisor === 0) {
               return false;

         }

     }

    return true;
}
