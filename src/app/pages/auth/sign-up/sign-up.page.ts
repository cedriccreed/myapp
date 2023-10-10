import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  opciones: {
    nivelCombustible: string;
    motorIrregular: string;
    estadoFiltroAire: string;
    funcionamientoTablero: string;
    nivelAceiteMotor: string;
    nivelRefrigerante: string;
    nivelAceiteTransmision: string;
    revisarFugasAceiteAire: string; // Agregamos Revisar Fugas de Aceite y/o Aire
  } = {
    nivelCombustible: '',
    motorIrregular: '',
    estadoFiltroAire: '',
    funcionamientoTablero: '',
    nivelAceiteMotor: '',
    nivelRefrigerante: '',
    nivelAceiteTransmision: '',
    revisarFugasAceiteAire: '', // Agregamos Revisar Fugas de Aceite y/o Aire
  };

  constructor() {}

  submitForm() {
    // Aquí puedes manejar la lógica para guardar los valores seleccionados
    // Por ejemplo, puedes enviarlos a un servicio o realizar cualquier otra acción necesaria
    console.log('Niveles de Combustible seleccionados:', this.opciones.nivelCombustible);
    console.log('Estado Motor Irregular seleccionado:', this.opciones.motorIrregular);
    console.log('Estado Filtro de Aire seleccionado:', this.opciones.estadoFiltroAire);
    console.log('Funcionamiento Tablero de Instrumentos seleccionado:', this.opciones.funcionamientoTablero);
    console.log('Nivel Aceite Motor seleccionado:', this.opciones.nivelAceiteMotor);
    console.log('Nivel Refrigerante seleccionado:', this.opciones.nivelRefrigerante);
    console.log('Nivel de Aceite (Transmisión Automática) seleccionado:', this.opciones.nivelAceiteTransmision);
    console.log('Revisar Fugas de Aceite y/o Aire seleccionado:', this.opciones.revisarFugasAceiteAire); // Agregamos Revisar Fugas de Aceite y/o Aire
  }
}










