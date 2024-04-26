import { promptInput, promptSelect } from './lib/prompts.js';
import { PetShopStore } from './classes/PetShopStore.js';
import { Pet, tiposPet } from './classes/Pet.js';
import { gravarArquivo } from './lib/file.js';
import chalk from 'chalk';

export async function menuCadastrarCliente(petShop: PetShopStore) {
  console.log(chalk.bgBlue('== CADASTRAR CLIENTE =='));

  // obtém o nome do cliente
  const nome = await promptInput({
    message: 'Informe o nome do cliente: ',
  });

  // obtém o cpf do cliente
  const cpf = await promptInput({
    message: 'Informe o CPF do cliente: ',
  });

  // obtém o número de telefone do cliente
  const telefone = await promptInput({
    message: 'Informe o telefone do cliente: ',
  });

  petShop.adicionarCliente(nome, cpf, telefone);

  // imprime mensagem de sucesso
  console.log(chalk.green(`>> Cliente cadastrado com sucesso. << `));

  await aguardaUsuario();
}

export async function menuListarClientes(petShop: PetShopStore) {
  console.log(chalk.bgBlue('== LISTAR CLIENTES =='));
  petShop.listarClientes();

  await aguardaUsuario();
}

export async function menuGravarDados(petShop: PetShopStore) {
  console.log(chalk.bgBlue('== GRAVAR DADOS =='));

  gravarArquivo(process.env.DB as string, JSON.stringify(petShop));

  console.log(chalk.green('>> Dados salvos com sucesso <<'));

  await aguardaUsuario();
}

export async function menuCadastrarPet(petShop: PetShopStore) {
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
