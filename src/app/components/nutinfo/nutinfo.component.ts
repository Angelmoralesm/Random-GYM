import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutinfo',
  templateUrl: './nutinfo.component.html',
  styleUrls: ['./nutinfo.component.scss']
})
export class NutinfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calcularImc() {//Agrega label del calculo del imc
    console.log("Calculando IMC");
    var peso:any = document.getElementById("peso");
    var altura:any = document.getElementById("altura");
    //altura de cm a metros
    var altura2:any = altura.value / 100;
    var imc = peso.value / (altura2 * altura2);
    $('resultado').html("Tu IMC es: " + imc);
    alert("IMC: " + imc);
  }

}
