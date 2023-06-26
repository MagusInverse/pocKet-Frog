import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  perfilFrog(){
    this.router.navigate(['/perfil'])
  }

  noticiasFrog(){
    this.router.navigate(['/noticias'])
  }

  categoriasFrog(){
    this.router.navigate(['/categorias'])
  }

  salirFrog(){
    this.router.navigate(['/login'])
  }
}
