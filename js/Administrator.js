import { Perfil } from "./Perfil.js";
export class Administrator extends Perfil {
    constructor(name, lastName, birthDate, genre, email, password) {
        super(name, lastName, birthDate, genre, email, password);
    }
    comentarAdministrador() {
        return `${this.password} é uma das senhas mais padrões que existe`;
    }
}
