// src/app/pages/task-list/task-list.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Precisa disso

import { IonicModule } from '@ionic/angular';

import { TaskListPageRoutingModule } from './task-list-routing.module';

import { TaskListPage } from './task-list.page'; // Importa a página

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    IonicModule,
    TaskListPageRoutingModule,
    TaskListPage // <-- 2. ADICIONE A PÁGINA AQUI (nos imports)
  ],
  declarations: [
    // 1. TIRE A PÁGINA DAQUI
  ]
})
export class TaskListPageModule {}