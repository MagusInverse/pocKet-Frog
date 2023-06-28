import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre: string ="";
  edad: string = "";
  correo : string = "";
  user : string = "";
  clave : string = "";

  constructor(private activerouter: ActivatedRoute, private router: Router) { 
    this.activerouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
        this.edad = this.router.getCurrentNavigation()?.extras?.state?.['edadEnviada'];
        this.correo = this.router.getCurrentNavigation()?.extras?.state?.['correoEnviada'];
        this.user = this.router.getCurrentNavigation()?.extras?.state?.['userEnviada'];
        this.clave = this.router.getCurrentNavigation()?.extras?.state?.['claveEnviada'];
      }
      else{
        this.nombre = "Félix Donoso";
        this.edad = "36 años";
        this.correo = "usuario@mail.cl";
        this.user = "Sir-rana";
        this.clave = "12345";
      }
    })  
  }

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
