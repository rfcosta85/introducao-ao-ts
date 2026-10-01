var a = 1;
/* a = "Olá";
 */
let b = "X";
b = "Y";
// b = 3;

console.log(a) 


let obj = {
    nome: "João",
    idade: 30,
    ativo: true
};

/* obj.morada = "Rua A, 123";
 */
const c = 0.23;
// c = 0.25; 



enum DiaDaSemana {
  Domingo = 0,
  Segunda = 1,
  Terca = 2,
  Quarta = 3,
  Quinta = 4,
  Sexta = 5,
  Sabado = 6
};

const hoje = new Date();
const diaDeHoje = hoje.getDay();
const diaDaSemana = DiaDaSemana[diaDeHoje];

console.log(diaDaSemana);

// Inferência de tipos

let nome = "Rodrigo";
let apelido: string = "Costa";
let idade: number = 30;
let anosProfissional = 15;
let ativo: boolean = true;

console.log(nome);

// Tipo de retorno da função

function soma(a: number, b: number): number {
    return a + b;
}

function saudacao(): void {
    console.log("Olá, seja bem-vindo!");
}


let resultado: any = soma(10, 5);
console.log("number: ",resultado);
resultado = saudacao();


// PQ não utilizar Any

let valor: string = "Ana";
// console.log(valor.toFixed(2)); 