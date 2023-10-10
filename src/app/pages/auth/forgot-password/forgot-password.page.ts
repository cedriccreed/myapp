import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

    form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(
    private alertController: AlertController
  ) {}

  async submit() {
    if (this.form.valid) {
      // Aquí puedes realizar la lógica para recuperar la contraseña.
      // Por ahora, solo mostraremos una alerta de ejemplo.
      const alert = await this.alertController.create({
        header: 'Recuperar contraseña',
        message: 'Se ha enviado un correo de recuperación a ' + this.form.value.email,
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  ngOnInit() {
  }
  


}
