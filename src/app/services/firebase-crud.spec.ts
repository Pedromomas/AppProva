// src/app/services/firebase-crud.service.ts

import { Injectable } from '@angular/core';
// 1. Imports do Firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

// 2. Definimos como é uma Tarefa (a "interface")
// Isso garante que todo objeto 'Tarefa' tenha esse formato
export interface Tarefa {
  id?: string; // O ID é opcional (o Firebase cria)
  titulo: string;
  finalizada: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {
  
  // 3. Referência à "coleção" (tabela) de tarefas no Firestore
  private tarefasCollection: AngularFirestoreCollection<Tarefa>;
  
  // 4. Uma variável que vai "escutar" a lista de tarefas
  public tarefas: Observable<Tarefa[]>; 

  // 5. "Injetamos" o AngularFirestore (nosso banco de dados) no construtor
  constructor(private firestore: AngularFirestore) {
    // Aponta para a coleção 'tarefas'. 
    // Se ela não existir no Firebase, ela será criada automaticamente
    this.tarefasCollection = this.firestore.collection<Tarefa>('tarefas');

    // --- READ (Ler) ---
    // Aqui está a mágica:
    // .valueChanges() fica "ouvindo" o banco de dados.
    // Qualquer mudança (add, update, delete) no Firebase,
    // a variável 'this.tarefas' é atualizada automaticamente!
    // { idField: 'id' } pede ao Firebase para incluir o ID do documento.
    this.tarefas = this.tarefasCollection.valueChanges({ idField: 'id' });
  }

  // --- CREATE (Criar) ---
  // Recebe um 'titulo' e cria uma nova tarefa no banco
  criarTarefa(titulo: string) {
    const novaTarefa: Tarefa = {
      titulo: titulo,
      finalizada: false // Toda nova tarefa começa como 'não finalizada'
    };
    // .add() adiciona um novo documento (tarefa) à coleção
    return this.tarefasCollection.add(novaTarefa);
  }

  // --- UPDATE (Atualizar) ---
  // Recebe o ID da tarefa e o novo estado (finalizada ou não)
  atualizarTarefa(id: string, finalizada: boolean) {
    // .doc(id) pega o documento específico e .update() atualiza
    // só o campo 'finalizada'
    return this.tarefasCollection.doc(id).update({ finalizada: finalizada });
  }

  // --- DELETE (Deletar) ---
  // Recebe o ID da tarefa que queremos apagar
  deletarTarefa(id: string) {
    // .doc(id) pega o documento e .delete() apaga
    return this.tarefasCollection.doc(id).delete();
  }
}