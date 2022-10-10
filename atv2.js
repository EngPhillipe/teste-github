//Atividade 6
// declarando as variáveis

let n1 ="nome"
let n2 = 1
let n3 = 5 == "5"

//exibindo as variáveis

console.log(n1)
console.log(n2)
console.log(n3)

//Atividade 7
// Interação com o usuário

var digitar = require(`prompt-sync`)({sigint:true});

//Declarando as variáveis com interação com o usuário

nome = (digitar('Digite seu nome: '));
idade =(digitar('Digite sua idade:'));

// Condições e mostrando o resultado.
if(idade <18){
   console.log(`${nome}: Entrada não Permitida!`);
   } else{
      console.log(`${nome} : Entrada permitida!`);
  }
 
 //Atividade 8
//Prompt de interação com o usuário

var digitar = require(`prompt-sync`)({sigint:true});

// declarando a variavel com interação com o usuário

nome = (digitar('Digite seu nome: '));

// Condições para a comparação

if(nome == "phillipe"){
     console.log(`${nome}: confirmado `);
  } else{
     console.log(`${nome} : Não confirmado `);
  
  
  }

// Atividade 8
// Declarando as variáveis e atribuindo a função Mach
let mt = Math.pow(2,2)
let mt1 = Math.pow(3,2)
let mt2 = Math.pow(18,2)

console.log(mt)
console.log(mt1)
console.log(mt2)

//Extra atividade 8

var digitar = require(`prompt-sync`)({sigint:true});
let valor = (digitar('Digite o valor : '));
const expoente = 2
let mt = Math.pow(valor,expoente)
console.log(mt)

   //Atividade 10
// Prompt de interação com o usuário

var digitar = require(`prompt-sync`)({sigint:true});

// Declarando a variável interagindo com o usuário

velocidade = (digitar('Digite a velocidade do seu carro : '));

// Condições

if(velocidade <= 80 ){
    console.log(`Velocidade Segura `);
  } else{
    console.log(`Multado`);
  
  }

// Atividade 11
// Prompt de interação com o usuário

var digitar = require(`prompt-sync`)({sigint:true});

// Declarando as variáveis com interação com o usuário

nome = (digitar('Digite o seu nome : '));
idade = (digitar('Digite a sua idade : '));
cnh = (digitar('possui CNH?: '));

//condições

if(idade < 18 & cnh == "não" ){
  console.log(`${nome}sujeto a multa `);

  } else if ( idade >= 18 & cnh == " não "){
    console.log(`preso`);
  }
    else ( idade >= 18 & cnh == " sim ")
       console.log(`liberado`);
    
// Atividade 12
//Contador while de o a 100
   let contador = 0
   while (contador <= 100 ) {
// exibindo o contador
      console.log (contador);
      contador++;
// Extra atividade 12
// Contando em numeros pares

    let contador = 0
    while (contador <= 100 ) {
       
     console.log (contador);
     contador += 2;
      
    }   
// Extra atividade 12
// contando em numeros impares
    let contador = 1
   while (contador <= 100 ) {
       
      console.log (contador);
      contador += 2;
   }

//atividade 13
// Contador decrescente de 100 a 50

     let contador = 100
   while (contador >= 50) {
       
      console.log (contador);
      contador  -- ;
   }

   // Extra atividade 13
   // Contador em Pares
   let contador = 100
   while (contador >= 50) {
       
      console.log (contador);
      contador  -=2 ;
   }

  //Extra atividade 13
  //Contador em Impares
  let contador = 101
  while (contador >= 50) {
     console.log (contador);
     contador  -=2;
  }

 // Atividade 14
 // Contador de 0 a 50 exibindo os números pares e impares
 let contador = 0

 while (contador <= 50) {

 { if(contador % 2 === 0 )
   console.log(`${contador}: Par`)

  else
   console.log(`${contador}: impar`)
   contador++
}
}
   
 


   