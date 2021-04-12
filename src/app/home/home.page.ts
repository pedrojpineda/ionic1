import { Component } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [ServiciosService]
})
export class HomePage {
  constructor(
    private serviciosService: ServiciosService
  ) {}
  productos = this.serviciosService.productos;
  agregarCarrito(producto: any): void {
    this.serviciosService.agregarCarrito(producto);
  }
}

