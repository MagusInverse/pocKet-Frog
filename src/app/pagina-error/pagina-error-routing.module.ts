import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaErrorPage } from './pagina-error.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaErrorPageRoutingModule {}
