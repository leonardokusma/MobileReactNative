import PromptSync from "prompt-sync";

const prompt = PromptSync();

const preco = Number(prompt("Preço Unitário do produto:"));
const quantidade = Number(prompt("Quantidade comprada:"));
const dinheiro = Number(prompt("Dinheiro recebido:"));
let troco = dinheiro - preco * quantidade;
console.log(`TROCO= ${troco.toFixed(2)}`);
