// src/app/pages/task-list/task-list.page.ts

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseCrudService, Tarefa } from '../../services/firebase-crud';

// Importes para o modo 'standalone'
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
  standalone: true,
  imports: [ IonicModule, FormsModule, CommonModule ] 
})
export class TaskListPage {
  
  public listaDeTarefas: Observable<Tarefa[]>;
  public novaTarefaTitulo: string = '';

  constructor(private crudService: FirebaseCrudService) {
    this.listaDeTarefas = this.crudService.tarefas;
  }

  adicionarTarefa() {
    if (this.novaTarefaTitulo.trim().length === 0) return; 
    console.log("Adicionando tarefa:", this.novaTarefaTitulo);
    
    this.crudService.criarTarefa(this.novaTarefaTitulo)
      .then(() => {
        this.novaTarefaTitulo = ''; 
      })
      .catch((err: any) => console.error("ERRO AO ADICIONAR:", err));
  }

  // vvv CORREÇÃO AQUI vvv
  // A função agora aceita 'string | undefined' do HTML
  deletarTarefa(id: string | undefined) { 
    console.log("Tentando deletar tarefa com ID:", id);

    // Adicionamos a checagem!
    if (!id) {
      console.error("ID está nulo ou indefinido! Não é possível deletar.");
      return; 
    }
    
    // Daqui para baixo, o TypeScript sabe que 'id' é uma string
    this.crudService.deletarTarefa(id) 
      .then(() => {
        console.log("Tarefa deletada com sucesso!");
      })
      .catch((err: any) => {
        console.error("ERRO AO DELETAR:", err); 
      });
  }

  // vvv CORREÇÃO AQUI (Onde deu seu erro) vvv
  toggleTarefaFinalizada(tarefa: Tarefa) {
    console.log("Tentando atualizar tarefa:", tarefa);

    // Adicionamos a checagem!
    if (!tarefa.id) {
      console.error("ID está nulo! Não é possível atualizar.");
      return;
    }

    // Daqui para baixo, o TypeScript sabe que 'tarefa.id' é uma string
    this.crudService.atualizarTarefa(tarefa.id, !tarefa.finalizada)
      .catch((err: any) => {
        console.error("ERRO AO ATUALIZAR:", err);
      });
  }
}