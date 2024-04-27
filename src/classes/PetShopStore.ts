import { Cliente } from './Cliente.js';
import { lerArquivo } from '../lib/file.js';
import chalk from 'chalk';

export class PetShopStore {
  private _clientes: Array<Cliente> = [];

  constructor() {
    const arquivo = process.env.DB as string;
    const dados = lerArquivo(arquivo);

    if (dados) {
      const clientes = JSON.parse(dados)._clientes as Array<{
        _id: number;
        _nome: string;
        _cpf: string;
        _telefone: string;
      }>;
      for (let i = 0; i < clientes.length; ++i) {
        this._clientes.push(
          new Cliente(
            clientes[i]._id,
            clientes[i]._nome,
            clientes[i]._cpf,
            clientes[i]._telefone
          )
        );
      }
    }
  }

  public async adicionarCliente(nome: string, cpf: string, telefone: string) {
    
    //Verifica se já existe um cliente com o CPF fornecido
    const clienteExistente = this.retornaCliente(cpf);
    
    if (clienteExistente) {
        console.log(chalk.yellow('Cliente com CPF já cadastrado. Atualizando dados...'));

        clienteExistente.atualizarDados(nome, telefone);


        console.log(chalk.green('>> Dados do cliente atualizados com sucesso. <<'));
    } else {
        // Se não houver cliente com o CPF fornecido, cria um novo cliente
        const id = this.proximoID();
        const cliente = new Cliente(id, nome, cpf, telefone);

        // Adiciona o novo cliente à lista de clientes
        this._clientes.push(cliente);
        

        console.log(chalk.green('>> Novo cliente cadastrado com sucesso. <<'));
    }
        }

  public async listarClientes() {
    console.log(`Listando ${this._clientes.length} cliente(s) cadastrado(s)\n`);

    // Imprime cliente por cliente da lista
    for (let i = 0; i < this._clientes.length; ++i)
      console.log(this._clientes[i].toString());
  }

  // calcula o próximo ID olhando o maior ID da lista
  private proximoID() {
    let maxID = 0;
    for (let i = 0; i < this._clientes.length; ++i) {
      maxID = this._clientes[i].id > maxID ? this._clientes[i].id : maxID;
    }

    return maxID + 1;
  }

  public retornaCliente(cpf: string){
    for(let i = 0; i < this._clientes.length; ++i){
      if(this._clientes[i].cpf() === cpf) {
        return this._clientes[i];
      }
    }
  }

  public removerCliente(cpf: string){
    for(let i = 0; i < this._clientes.length; ++i){
      if(this._clientes[i].cpf() === cpf) {
        this._clientes.splice(i, 1);
      }
    }
  }
}