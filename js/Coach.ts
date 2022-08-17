import { Perfil } from "./Perfil.js";

export class Coach extends Perfil {

    constructor(name: string, lastName: string, birthDate: string, genre: string, email: string, password: string) {
        super(name, lastName, birthDate, genre, email, password)
    }

    contatarTreinador():string{
        return `Email do(a) treinador(a) ${this.name}: ${this.email}`
    }
}