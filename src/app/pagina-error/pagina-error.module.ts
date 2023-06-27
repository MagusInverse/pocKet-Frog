import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaErrorPageRoutingModule } from './pagina-error-routing.module';

import { PaginaErrorPage } from './pagina-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaErrorPageRoutingModule
  ],
  declarations: [PaginaErrorPage]
})
export class PaginaErrorPageModule {}
