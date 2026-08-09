import { dadosLivros } from './dadosLivros.js';

export function exibirEstatistica() {
  const total = dadosLivros.length;
  const disponiveis = dadosLivros.filter(l => l.disponivel).length;
  const emprestados = total - disponiveis;

  console.log("--- ESTATÍSTICAS ---");
  console.log(`Total de livros: ${total}`);
  console.log(`Disponíveis: ${disponiveis}`);
  console.log(`Emprestados: ${emprestados}`);
}