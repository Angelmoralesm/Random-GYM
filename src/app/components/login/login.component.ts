import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //compara input de nombre de usuario y contraseña en formulario con los datos del archivo usuarios.json
  compare(){
    
    let usuario:any = document.getElementById("nombre");
    let contraseña:any = document.getElementById("contraseña");
    
    var encontrado=false;
    if(usuario.value == "" && contraseña.value == ""){
        alert("campos vacios");
    }
    else{
        $.getJSON( "../../../assets/data/usuarios.json", function( json ){        
            var datos = json.usuarios;        
        
            for(var i = 0; i < datos.length; i++){
                console.log(datos[i].nombre);
                if(datos[i].nombre == usuario.value && datos[i].clave == contraseña.value){
                    encontrado = true;
                    alert("Bienvenido");
                    break;
                }
            }
            if(!encontrado){
                alert("Usuario o contraseña incorrectos");
            }
            else{//redirige a la pagina principal
                window.location.href = "http://localhost:4200/profile";
            }
        });
    }
  }
}
