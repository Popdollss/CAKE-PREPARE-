import PromptSync = require ('prompt-sync');
import {Bolo} from "./Bolo";

const prompt = PromptSync();

const tamanho = Number (prompt ('Digite o tamanho do seu bolo:'));
const sabor = prompt ('Digite o sabor do bolo:')
const formato = prompt('Digite o formato do bolo:')
const recheio = prompt ('Digite o recheio do bolo:')
const cobertura = prompt ('Digite a cobertura do bolo:')
const valor = Number (prompt ('Digite o valor do bolo:'))
const fatias = Number (prompt ('Digite quantas fatias tem'))

const bolo: Bolo = new Bolo({
    tamanho,
    cobertura,
    formato,
    recheio,
    sabor,
    valor,
});

console.log(`Bolo de ${sabor} com ${recheio}: ${valor} e ainda restam ${bolo.fatias} fatias`);
