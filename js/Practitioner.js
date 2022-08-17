import { Perfil } from "./Perfil.js";
export class Practitioner extends Perfil {
    constructor(name, lastName, birthDate, genre, email, password) {
        super(name, lastName, birthDate, genre, email, password);
    }
    get getPreferredMode() {
        return this.preferredMode;
    }
    set setPreferredMode(preferredMode) {
        this.preferredMode = preferredMode;
    }
    apresentarPraticante() {
        return `O(a) praticante ${this.name} nasceu no dia ${this.birthDate}.`;
    }
}
