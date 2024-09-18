import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {
  usuario = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)])
  });

  constructor(private router: Router) { }

  ngOnInit() {}

  navegarExtras() {
    // Validar que el formulario esté correctamente completado antes de navegar
    if (this.usuario.valid) {
      const userName = this.usuario.get('user')?.value; // Asegurarse de obtener el valor del nombre de usuario

      // Preparar los datos para pasar el nombre de usuario
      let setData: NavigationExtras = {
        state: {
          user: userName // Enviar solo el nombre de usuario
        }
      };

      // Navegar a la página de bienvenida
      this.router.navigate(['/bienvenido-alumno'], setData);
    } else {
      console.log('El formulario no es válido');
      // Aquí puedes manejar los errores de validación o mostrar un mensaje al usuario.
    }
  }
}
