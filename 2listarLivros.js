import { dadosLivros } from './dadosLivros.js';

export function listarLivros() {
  console.log("--- LISTA DE LIVROS ---");
  if (dadosLivros.length === 0) {
    console.log("Nenhum livro cadastrado.");
    return;
  }
  dadosLivros.forEach((livro, index) => {
    const status = livro.disponivel ? "Disponível" : "Emprestado";
    console.log(`${index + 1}. ${livro.titulo} - ${livro.autor} [${status}]`);
  });
}