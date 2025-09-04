import PromptSync from "prompt-sync";

const prompt = PromptSync();

let primeira = Number(prompt("DIgite a primeira Nota"));
let segunda = Number(prompt("Digite a segunda Nota:"));
let media = (primeira + segunda);
console.log(`NOTA FINAL = ${media.toFixed(2)}`);

if(media <60){
    console.log("Reprovado");
}