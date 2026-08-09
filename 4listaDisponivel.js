import { dadosLivros } from './dadosLivros.js';

export function listaDisponivel() {
  console.log("--- LIVROS DISPONÍVEIS ---");
  const disponiveis = dadosLivros.filter(l => l.disponivel);
  if (disponiveis.length === 0) {
    console.log("Nenhum livro disponível.");
    return;
  }
  disponiveis.forEach((livro, index) => {
    console.log(`${index + 1}. ${livro.titulo} - ${livro.autor}`);
  });
}