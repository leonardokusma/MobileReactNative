import PromptSync from 'prompt-sync'

const prompt =  PromptSync();

const baseRetangulo = Number(prompt("Base do retangulo:"));
const alturaRetangulo = Number(prompt("Altura do retangulo:"));

let area = baseRetangulo * alturaRetangulo;
let perimetro = (baseRetangulo * 2) + (alturaRetangulo*2);
let diagonal = Math.sqrt((Math.pow(baseRetangulo,2)+ Math.pow(alturaRetangulo,2)))
console.log(`AREA:${area.toFixed(4)}`)
console.log(`PERIMETRO:${perimetro.toFixed(4)}`);
console.log(`DIAGONAL:${diagonal.toFixed(4)}`);