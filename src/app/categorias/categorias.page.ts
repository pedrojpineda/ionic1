import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from '../servicios.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  providers: [ServiciosService]
})
export class CategoriasPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private serviciosService: ServiciosService
  ) { }
  productos = this.serviciosService.productos;
  categoria;
  tituloCategoria;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.categoria = String(routeParams.get('categoria'));
    console.log('categoria', this.categoria);
    if(this.categoria == 'electronicos'){
      this.tituloCategoria = 'Electrónicos';
    }else {
      this.tituloCategoria = 'Otros';
    }
  }
  agregarCarrito(producto: any): void {
    this.serviciosService.agregarCarrito(producto);
  }
}
