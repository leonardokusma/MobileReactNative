//-b +- <(b2 - 4ac)/2a

import PromptSync from "prompt-sync";

const prompt = PromptSync();
let a = Number(prompt("Coeficiente a:"));
let b = Number(prompt("Coeficiente b"));
let c = Number(prompt("Coeficiente c"));

let delta = Math.pow(b,2) - 4 *a *c
let x1 = (-b + Math.sqrt(delta))/2;
let x2 = (-b - Math.sqrt(delta))/2;

if(delta <0){
    console.log(`Essa equação não possúi raizes nos números reais.`);

}else{
    console.log(`X1:${x1.toFixed(3)}`);
    console.log(`X2:${x2.toFixed(3)}`);
}