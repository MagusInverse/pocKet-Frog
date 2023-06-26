import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private router: Router) { }

  homeFrog(){
    this.router.navigate(['/home'])
  }
  ngOnInit() {
  }

}
