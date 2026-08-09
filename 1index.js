import promptSync from 'prompt-sync';
const prompt = promptSync();

import { listarLivros } from './2listarLivros.js';
import { buscarLivros } from './3buscarLivros.js';
import { listaDisponivel } from './4listaDisponivel.js';
import { cadastraLivros } from './5cadastraLivros.js';
import { realizarEmprestimo } from './6realizarEmprestimo.js';
import { realizarDevolucao } from './7realizarDevolucao.js';
import { exibirEstatistica } from './8exibirEstatistica.js';

let opcao;

do {
  console.log("=== SISTEMA DE BIBLIOTECA ===");
  console.log("1. Listar Livros");
  console.log("2. Buscar Livro");
  console.log("3. Listar Disponíveis");
  console.log("4. Cadastrar Livro");
  console.log("5. Realizar Empréstimo");
  console.log("6. Realizar Devolução");
  console.log("7. Exibir Estatística");
  console.log("0. Sair");
  
  opcao = prompt("Escolha uma opção: ");

  switch (opcao) {
    case '1': 
      listarLivros(); 
      break;
    case '2': 
      buscarLivros(prompt("Digite o título: ")); 
      break;
    case '3': 
      listaDisponivel(); 
      break;
    case '4': 
      cadastraLivros(
        prompt("Título: "),
        prompt("Autor: "),
        prompt("Categoria: "),
        Number(prompt("Páginas: "))
      ); 
      break;
    case '5': 
      realizarEmprestimo(prompt("Título para emprestar: ")); 
      break;
    case '6': 
      realizarDevolucao(prompt("Título para devolver: ")); 
      break;
    case '7': 
      exibirEstatistica(); 
      break;
    case '0': 
      console.log("Saindo..."); 
      break;
    default: 
      console.log("Opção inválida!"); 
  }
  
  if(opcao !== '0') prompt("\nPressione ENTER para continuar...");
  
} while (opcao !== '0');