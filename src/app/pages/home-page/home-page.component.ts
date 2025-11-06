// src/app/pages/home-page/home-page.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa o Router

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePageComponent {

  constructor(private router: Router) { } // Injeta o Router

  // Função que já tínhamos
  goToTaskList() {
    this.router.navigate(['/task-list']);
  }

  // Função que já tínhamos
  goToAboutPage() {
    this.router.navigate(['/about-page']);
  }

  // --- FUNÇÕES NOVAS (PARA A PROVA) ---

  goToListarContatos() {
    this.router.navigate(['/listar-contatos']);
  }

  goToAdicionarContato() {
    this.router.navigate(['/adicionar-contato']);
  }
}