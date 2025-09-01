import PromptSync from 'prompt-sync'

const prompt = PromptSync();
const largura = Number(prompt("DIgite a largura do terreno:"));
const comprimento = Number(prompt("Digite o comprimento do terreno:"));
let valorMetro = Number(prompt("Digite o valor do metro quadrado:"));

let area = largura * comprimento;
let valor = area * valorMetro;
console.log(`Area do terreno = ${valor.toFixed(2)}`)