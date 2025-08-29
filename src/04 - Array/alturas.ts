import PromptSync from "prompt-sync";

const prompt = PromptSync();

const qtd = Number(prompt("Quntas pessoas serao digitadas?"));
let soma = 0;
let media = 0;
let menos16 = 0;
let menores: string[] = [];
const nomes:string[] = [];
const idades:number[] = [];
const alturas: Number[] = [];

for(let i = 0; i < qtd;i++){

    const nome = prompt("Nome:");
    const idade = Number(prompt("Idade:"));
    const altura = parseFloat(prompt("Altura:"));

    nomes.push(nome);
    idades.push(idade);
    alturas.push(altura);
    soma += altura;
    if(idade < 16){
        menos16++;
        menores.push(nome);
    }
    
}
menos16 = (menos16 * 100) / qtd;
media = soma / qtd;
console.log("ALtura Media:"+media.toFixed(2));
console.log("Pessoas com menos de 16 anos:"+menos16.toFixed(2)+"%");
console.log(menores.join("/n"));

