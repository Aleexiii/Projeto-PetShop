import { promptInput, promptSelect } from './lib/prompts.js';
import { Pet, tiposPet } from './classes/Pet.js';
import { gravarArquivo } from './lib/file.js';
import chalk from 'chalk';
export async function menuCadastrarCliente(petShop) {
    console.log(chalk.bgBlue('== CADASTRAR CLIENTE =='));
    // Obtém o nome do cliente (obrigatório)
    const nome = await promptInput({
        message: 'Informe o nome do cliente: ',
        validateFunctionNull: (input) => {
            if (input === null) {
                return 'O nome do cliente é obrigatório.';
            }
        },
    });
    // Obtém o CPF do cliente (obrigatório)
    const cpf = await promptInput({
        message: 'Informe o CPF do cliente: ',
        validateFunction: (input) => {
            if (!input.match(/^\d+$/)) {
                return 'O CPF deve conter apenas números.';
            }
            return true;
        },
        validateFunctionNull: (input) => {
            if (input === null) {
                return 'O CPF é obrigatório.';
            }
        },
    });
    // Obtém o número de telefone do cliente
    const telefone = await promptInput({
        message: 'Informe o telefone do cliente: ',
    });
    petShop.adicionarCliente(nome, cpf, telefone);
    console.log(chalk.green(`>> Cliente cadastrado com sucesso. << `));
    await aguardaUsuario();
}
export async function menuListarClientes(petShop) {
    console.log(chalk.bgBlue('== LISTAR CLIENTES =='));
    petShop.listarClientes();
    await aguardaUsuario();
}
export async function menuGravarDados(petShop) {
    console.log(chalk.bgBlue('== GRAVAR DADOS =='));
    gravarArquivo(process.env.DB, JSON.stringify(petShop));
    console.log(chalk.green('>> Dados salvos com sucesso <<'));
    await aguardaUsuario();
}
export async function menuCadastrarPet(petShop) {
    console.log(chalk.bgBlue('== CADASTRAR PET =='));
    // obtém o nome do pet
    const nome = await promptInput({
        message: 'Informe o nome do pet: ',
    });
    const idade = await promptInput({
        message: 'Informe a idade do pet: ',
    });
    const raca = await promptInput({
        message: 'Informe a raça do pet: ',
    });
    // obtém o cliente dono do pet
    const clienteID = await promptInput({
        message: 'Informe o CPF do cliente: ',
    });
    const tipo = await promptSelect({
        message: 'Selecione o tipo do pet:',
        choices: [...tiposPet],
    });
    const pet = new Pet(nome, parseInt(idade), raca, tiposPet[tipo]);
}
async function aguardaUsuario() {
    console.log('');
    // aguarda o usuário apertar uma tecla para voltar ao menu inicial
    await promptInput({
        message: `Pressione ${chalk.red('ENTER')} para continuar...`,
    });
}
