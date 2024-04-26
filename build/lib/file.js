import fs from 'fs';
export function gravarArquivo(nome, conteudo) {
    fs.writeFileSync(nome, conteudo);
}
export function lerArquivo(nome) {
    let data = null;
    try {
        data = fs.readFileSync(nome, { encoding: 'utf-8' });
    }
    catch (err) {
        data = null;
    }
    return data;
}
