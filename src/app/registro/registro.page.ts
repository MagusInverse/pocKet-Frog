import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string ="";
  edad: string = "";
  correo : string = "";
  user : string = "";
  clave : string = "";

  constructor(private router: Router, private activerouter: ActivatedRoute, private alertController: AlertController) { }

  perfilFrog(){
    if(this.nombre.valueOf()!="" || this.edad.valueOf()!="" || this.correo.valueOf()!=""|| this.user.valueOf()!="" || this.clave.valueOf()!=""){
      let navigationExtras: NavigationExtras = {
        state: {
          nombreEnviado: this.nombre,
          edadEnviada: this.edad,
          correoEnviada: this.correo,
          userEnviada: this.user,
          claveEnviada: this.clave
        }
      };

      this.presentAlert("Bienvenid@ "+ this.user + " a Ranaverso!");
      this.router.navigate(['/perfil'], navigationExtras)
    }
    else{
      this.presentAlert("Complete todos los datos porfavor");
    }
    
  }
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Saludos!',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
