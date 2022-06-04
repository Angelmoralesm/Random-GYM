import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registrar(){
    
    let usuario:any = document.getElementById("nombre");
    let contraseña:any = document.getElementById("contraseña");
    let contraseña2:any = document.getElementById("contraseña2");
    let correo:any = document.getElementById("email");
    
    var encontrado=false;
    
    if(usuario.value == "" || contraseña.value == "" || contraseña2.value == "" || correo.value == ""){
      alert("campos vacios");
    }
    else{
      if(contraseña.value != contraseña2.value){

        alert("contraseñas no coinciden");
      
      }else{
        $.getJSON( "../../../assets/data/usuarios.json", function( json ){        
          var datos = json.usuarios;
                 
          for(var i = 0; i < datos.length; i++){
            console.log(datos[i].nombre); 
            if(datos[i].nombre == usuario.value){
              encontrado = true;
              alert("Usuario ya existe");
              break;
            }
          }

          if(!encontrado){
            alert("Registro exitoso");
            localStorage.setItem('testObject', JSON.stringify(datos));
            window.location.href = "http://localhost:4200/questions";
          }
          
        });
      }  
    }
  }

}
