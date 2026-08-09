import { dadosLivros } from './dadosLivros.js';

export function buscarLivros(titulo) {
  const livro = dadosLivros.find(l => l.titulo.toLowerCase() === titulo.toLowerCase());
  if (livro) {
    console.log(`\nLivro encontrado: ${livro.titulo} - ${livro.autor} - ${livro.categoria}`);
  } else {
    console.log("\nLivro não encontrado.");
  }
}