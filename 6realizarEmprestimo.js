import { dadosLivros } from './dadosLivros.js';

export function realizarEmprestimo(titulo) {
  const livro = dadosLivros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
  if (livro) {
    if (livro.disponivel) {
      livro.disponivel = false;
      console.log(`Empréstimo do livro "${titulo}" realizado!`);
    } else {
      console.log(`Livro "${titulo}" já está emprestado.`);
    }
  } else {
    console.log("Livro não encontrado.");
  }
}