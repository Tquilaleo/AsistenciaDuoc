import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido-alumno',
  templateUrl: './bienvenido-alumno.page.html',
  styleUrls: ['./bienvenido-alumno.page.scss'],
})
export class BienvenidoAlumnoPage implements OnInit {
  user: string | undefined;

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        // Cambiado de 'id' a 'user' para coincidir con el envío desde la página de login
        this.user = this.router.getCurrentNavigation()?.extras.state?.['user'];
      }
    });
  }

  ngOnInit() {}
}
