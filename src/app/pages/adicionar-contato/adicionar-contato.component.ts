// src/app/pages/adicionar-contato/adicionar-contato.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // <-- A LINHA CORRIGIDA
import { Router } from '@angular/router';

// Importa o serviço correto (firebase-crud.ts)
import { FirebaseCrudService } from '../../services/firebase-crud'; 

@Component({
  selector: 'app-adicionar-contato',
  templateUrl: './adicionar-contato.component.html',
  styleUrls: ['./adicionar-contato.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] 
})
export class AdicionarContatoComponent {
  
  nome: string = '';
  telefone: string = '';

  constructor(
    private crudService: FirebaseCrudService, 
    private router: Router
  ) { }

  salvarContato() {
    if (!this.nome || !this.telefone) {
      alert('Por favor, preencha nome e telefone.');
      return; 
    }
    
    const novoContato = { nome: this.nome, telefone: this.telefone };
    
    this.crudService.addContato(novoContato).then(() => {
      alert('Contato salvo no Firestore!');
      this.router.navigate(['/home-page']); // Volta para a home
    });
  }
}