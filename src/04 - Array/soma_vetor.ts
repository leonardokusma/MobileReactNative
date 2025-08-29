import PromptSync from "prompt-sync";
const prompt = PromptSync();

const qtd = Number(prompt("Quantos Numeros voce vai digitar?"))

const numeros: number[] = [];
let soma = 0;
let media = 0;


for(let i = 0; i < qtd;i++){
    const n = Number(prompt("Digite um NUmero:"));
    numeros.push(n);
    soma += n;
}

media = soma / qtd;
console.log("valores = "+ numeros.join(" "));

console.log("---------------------------------");
console.log("Soma:"+soma.toFixed(2));
console.log("Media"+media.toFixed(2));
