import { Cliente } from './Cliente.js';
import { lerArquivo } from '../lib/file.js';

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
    // descobre qual é o próximo ID do cliente
    const id = this.proximoID();

    // cria um novo objeto cliente
    const cliente = new Cliente(id, nome, cpf, telefone);

    // adiciona o cliente à lista de clientes
    this._clientes.push(cliente);
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
      if(this._clientes[i] === cpf)
    }
  }
}
