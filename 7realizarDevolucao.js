import { dadosLivros } from './dadosLivros.js';

export function realizarDevolucao(titulo) {
  const livro = dadosLivros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
  if (livro) {
    if (!livro.disponivel) {
      livro.disponivel = true;
      console.log(`Devolução do livro "${titulo}" realizada!`);
    } else {
      console.log(`Livro "${titulo}" já está disponível.`);
    }
  } else {
    console.log("Livro não encontrado.");
  }
}