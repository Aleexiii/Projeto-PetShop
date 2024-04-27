import 'dotenv/config';
import { promptSelect } from './lib/prompts.js';
import { menuCadastrarCliente, menuListarClientes, menuExcluirCliente, menuGravarDados, menuCadastrarPet, } from './menu.js';
import { PetShopStore } from './classes/PetShopStore.js';
const petShop = new PetShopStore();
let opcao = 0;
// 2 é o índice atual da opção de sair do programa
while (opcao !== 7) {
    console.clear();
    opcao = await promptSelect({
        message: 'Selecione uma opção:',
        choices: [
            'Cadastrar cliente',
            'Listar clientes',
            'Excluir Cliente',
            '---',
            'Cadastrar pet',
            '---',
            'Gravar Dados',
            'Sair',
        ],
    });
    switch (opcao) {
        case 0: // cadastrar cliente
            await menuCadastrarCliente(petShop);
            break;
        case 1: // listar clientes
            await menuListarClientes(petShop);
            break;
        case 2: //excluir cliente
            await menuExcluirCliente(petShop);
            break;
        case 3: // cadastrar pets
            await menuCadastrarPet(petShop);
            break;
        case 5: // gravar dados
            await menuGravarDados(petShop);
            break;
    }
}
// const array1: Array<string> = ['Aluno 1', 'Aluno 2', 'Aluno 3'];
// const array2: Array<string> = [...array1];
// array1[0] = 'Aluno X';
// console.log(array1);
// console.log(array2);
