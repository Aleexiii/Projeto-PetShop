export class Cliente {
    constructor(id, nome, cpf, telefone) {
        this._pets = [];
        this._id = id;
        this._nome = nome;
        this._cpf = cpf;
        this._telefone = telefone;
    }
    toString() {
        return `ID: ${this._id} - Nome: ${this._nome} - CPF: ${this._cpf} - Telefone: ${this._telefone}`;
    }
    get id() {
        return this._id;
    }
    adicionarPet(pet) {
        this._pets.push(pet);
    }
    cpf() {
        return this._cpf;
    }
}
