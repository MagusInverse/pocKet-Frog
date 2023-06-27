import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-error',
  templateUrl: './pagina-error.page.html',
  styleUrls: ['./pagina-error.page.scss'],
})
export class PaginaErrorPage implements OnInit {

  constructor(private router: Router) { }

  loginFrog(){
    this.router.navigate(['/login'])
  }
  ngOnInit() {
  }

}
