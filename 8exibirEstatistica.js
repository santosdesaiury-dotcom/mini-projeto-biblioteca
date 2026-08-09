import { dadosLivros } from './dadosLivros.js';

export function exibirEstatisticas() {
  const total = dadosLivros.length;
  
  if (total === 0) {
    console.log("Nenhum livro cadastrado.");
    return;
  }

  const disponiveis = dadosLivros.filter(l => l.disponivel).length;
  const indisponiveis = dadosLivros.filter(l => !l.disponivel).length;

  const totalPaginas = dadosLivros.reduce((soma, l) => soma + l.paginas, 0);
  
  const mediaPaginas = totalPaginas / total;

  console.log("\n--- ESTATÍSTICAS ---");
  console.log(`Total de livros cadastrados: ${total}`);
  console.log(`Quantidade de livros disponíveis: ${disponiveis}`);
  console.log(`Quantidade de livros indisponíveis: ${indisponiveis}`);
  console.log(`Total de páginas considerando todos os livros: ${totalPaginas}`);
  console.log(`Média de páginas por livro: ${mediaPaginas.toFixed(2)}`);
  console.log("--------------------\n");
}