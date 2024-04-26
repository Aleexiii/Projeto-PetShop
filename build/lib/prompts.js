import inquirer from 'inquirer';
/**
 * Gera um prompt em forma de lista e aguarda a seleção do usuário
 */
export async function promptSelect({ message, choices, }) {
    const { resposta } = await inquirer.prompt({
        type: 'list',
        name: 'resposta',
        message,
        choices: choices.map((choice, idx) => {
            if (choice === '---')
                return new inquirer.Separator();
            return {
                name: choice,
                value: String(idx),
            };
        }),
        loop: false,
    });
    return Number.parseInt(resposta);
}
/**
 * Gera um prompt simples e aguarda a resposta do usuário
 */
export async function promptInput({ message, defaultValue, validateFunction, }) {
    const { resposta } = await inquirer.prompt({
        type: 'input',
        name: 'resposta',
        message,
        default: defaultValue,
        validate: validateFunction,
    });
    return resposta;
}
