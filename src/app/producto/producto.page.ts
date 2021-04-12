import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  providers: [ServiciosService]

})
export class ProductoPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private serviciosService: ServiciosService
  ) { }
  producto;
  productos = this.serviciosService.productos;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productoIdFromRoute = String(routeParams.get('link'));
    this.producto = this.productos.find(producto => producto.link === productoIdFromRoute);
  }
  agregarCarrito(producto: any): void {
    this.serviciosService.agregarCarrito(producto);
  }
}
