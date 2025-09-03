import PromptSync from "prompt-sync";
const prompt = PromptSync();
const nome = String(prompt("Nome:"));
const valorhora = Number(prompt("Nome:"));
const horas = Number(prompt("Horas trabalhadas:"));

let pag = valorhora * horas;
console.log(`O pagamento para ${nome} deve ser ${pag.toFixed(2)}`);
