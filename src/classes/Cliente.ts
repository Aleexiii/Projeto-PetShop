import { Pet } from './Pet.js';

export class Cliente {
  private _id: number;
  private _nome: string;
  private _cpf: string;
  private _telefone: string | null;
  private _pets: Array<Pet> = [];

  constructor(id: number, nome: string, cpf: string, telefone: string | null) {
    this._id = id;
    this._nome = nome;
    this._cpf = cpf;
    this._telefone = telefone;
  }

  public toString() {
    return `ID: ${this._id} - Nome: ${this._nome} - CPF: ${this._cpf} - Telefone: ${this._telefone}`;
  }

  public get id() {
    return this._id;
  }

  public adicionarPet(pet: Pet) {
    this._pets.push(pet);
  }

  public cpf() {
    return this._cpf;
  }
}
