// src/app/pages/about-page/about-page.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // Garanta que o IonicModule está aqui
})
export class AboutPageComponent {

  constructor() { }

}