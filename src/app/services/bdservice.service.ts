import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {
  //variable para manipular la conexion a base de datos
  public database!: SQLiteObject;
  //se necesitan variables para las instrucciones sql - variable para creacion de tablas.
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario("+
                          "id_usuario INTEGER PRIMARY KEY autoincrement,"+
                          "nombre VARCHAR(40) NOT NULL,"+
                          "edad VARCHAR(40) NOT NULL,"+
                          "correo VARCHAR(40) NOT NULL"+
                          "nickname VARCHAR(40) NOT NULL"+
                          "password VARCHAR(40) NOT NULL);";
  //aqui se puede crear mas variables, por si necesito mas tablas.

  //variables para registros iniciales.
  registroUsuario: string = "INSERT OR IGNORE INTO usuario(id_usuario, nombre, edad, correo, nickname, password) VALUES(1,'Felix Donoso','36','fe.donosoa@duocuc.cl','Sir Rana','1234');";

  //observables para manipular los datos de la tabla noticia.
  listaUsuarios = new BehaviorSubject([]);

  //observable para manipular la base de datos, si la BD está lista o no.
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private toastController: ToastController, private sqlite: SQLite, private platform: Platform) { }

  async presentToast(msj:string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: 'bottom',
      icon: 'globe',
    });
    await toast.present();
  }

    //metodo para retornar el status de la base de datos
    dbState(){
      return this.isDBReady.asObservable();
    }
    //Devolver el observable de los registros de cada tabla
    fetchNoticias(): Observable<Usuario[]>{
      return this.listaUsuarios.asObservable();
    }

    creadBD(){
      //Verificar que la plataforma este lista
      this.platform.ready().then(()=>{
        //crear la BD
        this.sqlite.create({
          name:'bdusuario.db',
          location: 'default'
        }).then((db: SQLiteObject)=>{
          //guardemos la conexion en nuestra variable
          this.database = db;
          //llamar a la funcion que crea las tablas y sus registros
          this.crearTablas();
        }).catch(e=>{
          this.presentToast("Error en la creación de la BD" + e);
        })
      })
    }
    async crearTablas(){
      try{
        //creacion de tablas, ojo con el orden, primero las tablas q no depende de nadie, despues las q dependen de otras
        await this.database.executeSql(this.tablaUsuario,[]);

        //insertar datos en las tablas
        await this.database.executeSql(this.registroUsuario,[]);

        //cargar esos registros en el observable
        this.buscarUsuario()
        this.isDBReady.next(true);
      
      }catch(e){
        this.presentToast("Error en la creación de las tablas" + e);
      }
    }

    buscarUsuario(){
      return this.database.executeSql('SELECT * FROM usuario;',[]).then(res=>{
        let items: Usuario[] = [];
        if(res.rows.length > 0){
          for(var i= 0; i<res.rows.length; i++){
            items.push({
              id: res.rows.item(i).id_usuario,
              nombre: res.rows.item(i).nombre,
              edad: res.rows.item(i).edad,
              correo: res.rows.item(i).correo,
              nickname: res.rows.item(i).nickname,
              password: res.rows.item(i).password,
            })
          }
        }
        this.listaUsuarios.next(items as any);
      })
    }
  insertarUsuario(nombre: any, edad: any, correo: any, nickname: any, password: any){
    let data = [nombre,edad,correo,nickname,password];
    return this.database.executeSql('INSERT INTO usuario(nombre,edad,correo,nickname,password) VALUES (?,?,?,?,?)',data).then(res=>{
      this.buscarUsuario();
    });
    }

    modificarUsuario(id: any,nombre: any,edad: any,correo: any,nickname: any,password: any){
      let data = [nombre,edad,correo,nickname,password,id];
      return this.database.executeSql('UPDATE usuario SET nombre = ?, edad = ?, correo = ?, nickname = ?, password = ? WHERE id_usuario = ?', data).then(data2=>{
        this.buscarUsuario();
      })
    }

    eliminarUsuario(id: any){
      return this.database.executeSql('DELETE FROM usuario WHERE id_usuario = ?',[id]).then(a=>{
        this.buscarUsuario();
      })
    }
    
}
