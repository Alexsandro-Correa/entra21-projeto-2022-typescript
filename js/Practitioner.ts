import { Perfil } from "./Perfil.js";

export class Practitioner extends Perfil {

    private preferredMode: string

    constructor(name: string, lastName: string, birthDate: string, genre: string, email: string, password: string) {
        super(name, lastName, birthDate, genre, email, password)
    }

    public get getPreferredMode(): string {
        return this.preferredMode
    }

    public set setPreferredMode(preferredMode: string) {
        this.preferredMode = preferredMode
    }

    apresentarPraticante():string{

        return `O(a) praticante ${this.name} nasceu no dia ${this.birthDate}.`
    }
}