import { promptInput } from '../lib/prompts.js';
import { toInteger } from '../lib/functions.js';
/**
 * Valida a entrada do usuário
 * */
function validarInput(valor) {
    // tenta converter para inteiro
    const { error, value } = toInteger(valor);
    // senão houve erro, verifica se o valor está dentro do intervalo
    if (!error)
        if (value > 0 && value < 101)
            return true;
    // em caso de número inválido, retorna a mensagem de erro
    return 'Número inválido. Tente novamente.';
}
async function main() {
    let resposta = await promptInput({
        message: 'Digite um número entre 1 a 100 (inclusive):',
        validateFunction: validarInput,
    });
    console.log(`Obrigado. Você digitou: ${resposta}`);
}
main();
