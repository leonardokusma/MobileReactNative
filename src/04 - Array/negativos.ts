import promptSync from 'prompt-sync'
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));

const numeros: number[] = [];

for (let i = 0; i < n; i++) {
    const numero = Number(prompt("sadad"));
    numeros.push(numero);
}
console.log(numeros.toString())