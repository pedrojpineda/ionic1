import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  providers: [ServiciosService]
})
export class CarritoPage implements OnInit {
  carrito = this.serviciosService.carrito;
  constructor(
    private serviciosService: ServiciosService
  ) { }

  ngOnInit(): void {
    this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  }
  eliminarCarrito(i): void {
    this.serviciosService.eliminarCarrito(i);
  }

}
