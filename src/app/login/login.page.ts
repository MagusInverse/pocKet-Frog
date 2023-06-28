import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  correo: string = "";
  password: string = "";

  constructor(private toastController: ToastController,private router: Router, private alertController: AlertController) { }

  logeado(){
    if(this.validarCredenciales(this.correo, this.password)){
      let navigationExtras: NavigationExtras ={
        state: {
          user: this.correo,
          pass: this.password
        }
      };
      this.router.navigate(['/home'], navigationExtras)
    }     
}

validarCredenciales(user:string, pass:string){
  if(user.length <8 && user.length >30){
    this.presentAlert("Correo válido entre 8 y 30 caracteres");
    return false;
  } 
  else if(user.valueOf()=="" || pass.valueOf()==""){
    this.presentAlert("Complete todos los campos porfavor");
    return false;
  }
  else if(pass.length >4 ){
    this.presentAlert("contraseña debe ser numerica y no mas de 4 digitos");
    return false;
  }
  else{
    return true;
  }
}

  loginFrog(){
    this.router.navigate(['/home'])
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }
}
