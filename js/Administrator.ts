import { Perfil } from "./Perfil.js";

export class Administrator extends Perfil {

    constructor(name: string, lastName: string, birthDate: string, genre: string, email: string, password: string) {
        super(name, lastName, birthDate, genre, email, password)
    }

    comentarAdministrador():string{
        return `${this.password} é uma das senhas mais padrões que existe`
    }

}

