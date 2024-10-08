import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagCadastroPageRoutingModule } from './pag-cadastro-routing.module';

import { PagCadastroPage } from './pag-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagCadastroPageRoutingModule
  ],
  declarations: [PagCadastroPage]
})
export class PagCadastroPageModule {}
