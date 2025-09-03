import PromptSync from "prompt-sync";

const prompt = PromptSync();

let segInfor = Number(prompt("Digite a duracao em segundos:"));

let horas = Math.floor(segInfor/3600);
segInfor %=3600;
let min = segInfor/60;
segInfor %= 60;
let seg = segInfor;
console.log(`${horas}:${min}:${seg}`);