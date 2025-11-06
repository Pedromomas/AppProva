// src/app/services/firebase-crud.ts

import { Injectable, Injector } from '@angular/core';
import { runInInjectionContext } from '@angular/core'; 
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Interface da sua task-list
export interface Tarefa { 
  id?: string; 
  titulo: string;
  finalizada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {
  
  // --- Para Task-List (Tarefas) ---
  private tarefasCollection: AngularFirestoreCollection<Tarefa>;
  public tarefas: Observable<Tarefa[]>; 

  // --- Para Contatos (Prova Etapa 4) ---
  private contatosCollection: AngularFirestoreCollection<any>;

  constructor(
    private firestore: AngularFirestore,
    private injector: Injector 
  ) {
    // Configura a coleção de Tarefas
    this.tarefasCollection = this.firestore.collection<Tarefa>('tarefas');
    // Configura a coleção de Contatos (para a prova)
    this.contatosCollection = this.firestore.collection('contatos');

    // Lógica para LER Tarefas (Task-List)
    this.tarefas = this.tarefasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const tarefaFinal: Tarefa = {
          id: id,
          titulo: data.titulo,
          finalizada: data.finalizada
        };
        return tarefaFinal;
      }))
    );
  }

  // --- Funções da TASK-LIST (que já funcionavam) ---

  criarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      titulo: titulo,
      finalizada: false
    };
    // O 'criarTarefa' não é chamado de um evento de clique problemático,
    // então 'runInInjectionContext' geralmente não é necessário aqui.
    return this.tarefasCollection.add(novaTarefa);
  }

  atualizarTarefa(id: string, finalizada: boolean) {
    // Correção do bug NG0203
    return runInInjectionContext(this.injector, () => 
      this.tarefasCollection.doc(id).update({ finalizada: finalizada })
    );
  }

  deletarTarefa(id: string) {
    // Correção do bug NG0203
    return runInInjectionContext(this.injector, () => 
      this.tarefasCollection.doc(id).delete()
    );
  }

  // --- Funções dos CONTATOS (Prova Etapa 4) ---

  // Função para ADICIONAR CONTATO (como a prova pede)
  addContato(contato: any) {
    // Usando a correção de bug que já temos
    // A LINHA CORTADA ESTÁ CORRIGIDA AQUI:
    return runInInjectionContext(this.injector, () => 
      this.contatosCollection.add(contato)
    );
  }

  // Função para LISTAR CONTATOS (como a prova pede)
  getContatos() {
    return this.contatosCollection.valueChanges({ idField: 'id' });
  }
}