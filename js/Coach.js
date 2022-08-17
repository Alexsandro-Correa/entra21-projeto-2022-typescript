import { Perfil } from "./Perfil.js";
export class Coach extends Perfil {
    constructor(name, lastName, birthDate, genre, email, password) {
        super(name, lastName, birthDate, genre, email, password);
    }
    contatarTreinador() {
        return `Email do(a) treinador(a) ${this.name}: ${this.email}`;
    }
}
