import { Administrator } from "./Administrator.js";
import { Coach } from "./Coach.js";
import { Practitioner } from "./Practitioner.js";

let praticante1: Practitioner = new Practitioner("Alexsandro", "Corrêa", "29/10", "Masculino", "alexsandro19031@hotmail.com", "segredo123")

let praticante2: Practitioner = new Practitioner("Stephanie", "Holz...", "15/08", "Feminino", "stephanieh@gmail.com", "senha345")

praticante1.setPreferredMode = "Futebol"
praticante2.setPreferredMode = "Vôlei"

console.log("------------------Praticantes--------------------");

console.log(`Nome: ${praticante1.name}`);
console.log(`Email: ${praticante1.email}`);
console.log(`Senha: ${praticante1.password}`);
console.log(`Esporte Preferido: ${praticante1.getPreferredMode}`);
console.log(praticante1.apresentarPraticante());


console.log("--------------------------------------------------");

console.log(`Nome: ${praticante2.name}`);
console.log(`Email: ${praticante2.email}`);
console.log(`Senha: ${praticante2.password}`);
console.log(`Esporte Preferido: ${praticante2.getPreferredMode}`);
console.log(praticante2.apresentarPraticante());


console.log("--------------------------------------------------");

let administrador: Administrator = new Administrator("Admin", "Adm", "00/00/0000", "Undefined", "admin@123.com", "admin")

console.log("------------------Administrador-------------------");

console.log(`Nome: ${administrador.name}`);
console.log(`Email: ${administrador.email}`);
console.log(`Senha: ${administrador.password}`);
console.log(administrador.comentarAdministrador());


console.log("--------------------------------------------------");

let treinador:Coach = new Coach("Jean","Galvani", "15/06/1980","Masculino","jeangalvani@123.com","expulseiofalcao")

console.log("------------------Treinadores---------------------");

console.log(`Nome: ${treinador.name} ${treinador.lastName}`);
console.log(`Email: ${treinador.email}`);
console.log(`Senha: ${treinador.password}`);
console.log(treinador.contatarTreinador());


console.log("--------------------------------------------------");

praticante1.setPreferredMode = "Tênis de Mesa"

console.log(`O ${praticante1.name} tem como novo esporte favorito ${praticante1.getPreferredMode}`);
