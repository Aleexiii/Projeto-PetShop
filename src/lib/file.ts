import fs from 'fs';

export function gravarArquivo(nome: string, conteudo: string) {
  fs.writeFileSync(nome, conteudo);
}

export function lerArquivo(nome: string) {
  let data: any = null;
  try {
    data = fs.readFileSync(nome, { encoding: 'utf-8' });
  } catch (err) {
    data = null;
  }

  return data;
}
