import PromptSync from "prompt-sync";

const prompt =PromptSync();
const distancia = Number(prompt("Distancia percorrida:"));
const gasto = Number(prompt("Combustível gasto:"));
let medio =- distancia / gasto;
console.log(`Consumo medio=${medio.toFixed(3)}`);
