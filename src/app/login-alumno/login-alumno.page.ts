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
  ngOnInit() {
  }

  navegarExtras() {
    let setData: NavigationExtras = {
      state: {
        id: this.usuario.value.user,
        user: this.usuario.value.pass
      }
    };
    this.router.navigate(['/bienvenido-alumno'], setData);
  }
}
