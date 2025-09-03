import PromptSync from "prompt-sync";
 const prompt = PromptSync();

 let raio = Number(prompt("Digite o valor do raio do Circulo:"));
let area = 2*3.14*raio;
 console.log(`AREA = ${area.toFixed(3)}`);
 