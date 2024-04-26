import { promptSelect } from '../lib/prompts.js';
async function main() {
    let resposta = await promptSelect({
        message: 'Qual é o melhor time de futebol do Brasil?',
        choices: ['Palmeiras', 'Flamengo', 'Corinthians', 'Fluminense', 'Outro...'],
    });
    let mensagem = 'Humn... Acho que você errou na escolha.';
    if (resposta === 0)
        mensagem = 'É isso aí! AVANTI PALESTRA!';
    console.log(mensagem);
}
main();
