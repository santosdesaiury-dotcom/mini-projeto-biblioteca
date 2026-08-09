import { dadosLivros } from './dadosLivros.js';
import { Livro } from './livros.js';

export function cadastraLivros(titulo, autor, categoria, paginas) {
  const novoLivro = new Livro(titulo, autor, categoria, paginas);
  dadosLivros.push(novoLivro);
  console.log(`Livro "${titulo}" cadastrado com sucesso!`);
}