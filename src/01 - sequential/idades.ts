import PromptSync from 'prompt-sync'


const prompt = PromptSync();

let nome;
let nome2;
let idade;
let idade2;

console.log("Dados da primeira pessoa:");
nome = String(prompt("Nome:"));
idade = Number(prompt("Idade:"));
console.log("Dados da segunda pessoa:");
nome2 = String(prompt("Nome:"));
idade2 = Number(prompt("Idades:"));

let media = (idade + idade2)/2;
console.log(`A idade média de ${nome} e ${nome2} é de ${media.toFixed(1)} anos`)
    