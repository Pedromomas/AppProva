// src/app/components/contato-item/contato-item.component.ts
import { Component, Input } from '@angular/core'; // Importe 'Input'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contato-item',
  templateUrl: './contato-item.component.html',
  styleUrls: ['./contato-item.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContatoItemComponent {
  @Input() user: any; // Recebe 'user' da página-pai
  constructor() { }
}