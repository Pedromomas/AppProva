// src/app/pages/listar-contatos/listar-contatos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ApiService } from '../../services/api'; // (Caminho para api.ts)
import { ContatoItemComponent } from '../../components/contato-item/contato-item.component'; 

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.component.html',
  styleUrls: ['./listar-contatos.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ContatoItemComponent] // Importa o componente
})
export class ListarContatosComponent  implements OnInit {
  users: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}