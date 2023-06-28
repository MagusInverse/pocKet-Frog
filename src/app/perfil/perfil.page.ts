import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombre: string ="";
  edad: string = "";
  correo : string = "";
  user : string = "";
  clave : string = "";

  constructor(private activerouter: ActivatedRoute, private router: Router){ 
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

  homeFrog(){
    let navigationExtras: NavigationExtras = {
      state: {
        nombreEnviado: this.nombre,
        edadEnviada: this.edad,
        correoEnviada: this.correo,
        userEnviada: this.user,
        claveEnviada: this.clave
      }
    };
    
    this.router.navigate(['/home'], navigationExtras)
  }

  ngOnInit() {
  }

}
