import PromptSync from "prompt-sync";

const prompt = PromptSync();

const a = Number(prompt("Digite a medida A:"));
const b = Number(prompt("Digite a medida B:"));
const c = Number(prompt("Digite a medida C:"));

let areaQuadrado = Math.pow(a,2);
let areaTrian = (a * b) / 2;
let areaTrapezio = (a + b) * (c/2);

console.log(`AREA DO QUADRADO=${areaQuadrado.toFixed(4)}`);
console.log(`AREA DO TRIANGULO=${areaTrian.toFixed(4)}`);
console.log(`AREA DO TRAPEZIO=${areaTrapezio.toFixed(4)}`);

