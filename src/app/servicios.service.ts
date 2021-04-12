import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  constructor() { }
  productos = [
    {
      id: 1,
      titulo: 'Vaporizador automático de higienizante 45 ml',
      link: 'vaporizador-automatico-de-higienizante-45-ml',
      categoria: 'electronicos',
      precio: 67000,
      cantidad: 1,
      imagen: 'dispensador-automatico-de-higienizante-hidroalcoholico.jpg',
      descripcion: 'Dispensador automático de higienizaste hidroalcohólico para higiene y limpieza de la piel, con sensor de movimiento de infrarrojos y led indicador. Tamaño compacto y discreto acabado en color blanco mate, con depósito de 45 ml fácilmente rellenable (alcohol no incluido), más filtro y muelle de recambio.'
    },
    {
      id: 2,
      titulo: 'Bolígrafo pulverizador 10 ml higienizante recargable',
      link: 'boligrafo-pulverizador-10-ml-higienizante-recargable',
      categoria: 'otros',
      precio: 5000,
      cantidad: 1,
      imagen: 'boligrafo-pulverizador-10-ml-higienizante-recargable.jpg',
      descripcion: 'Bolígrafo higienizante con pulverizador recargable integrado y capucha protectora. Acabado en resistente ABS brillante y escritura en tinta azul. Capacidad del pulverizador 10ml. Líquido no incluido. Disponible en color blanco.'
    },
    {
      id: 3,
      titulo: 'Pantalla protectora infantil con esponja protectora',
      link: 'pantalla-protectora-infantil-con-esponja-protectora',
      categoria: 'otros',
      precio: 13000,
      cantidad: 1,
      imagen: 'pantalla-protectora-cara-infantil-envasada-individualmente-con-esponja-protectora-de-frente.jpg',
      descripcion: 'Pantalla facial para niño en resistente PET. Con cinta ajustable para la cabeza en PP y almohadilla de protección para un cómodo ajuste en la frente. Fácil de desinfectar después de cada uso, con soportes laterales para las bandas elásticas de la mascarilla. Además de un amplio campo de visión, proporciona aislamiento frente a salpicaduras y partículas en zonas especialmente sensibles, como el área ocular, nariz y boca.\n' +
        '\n' +
        'Idónea como barrera de protección higiénica adicional a la distancia social y/o al uso de mascarillas.\n' +
        'Fabricada con materiales aptos para el contacto con la piel, con terminaciones diseñadas para un uso prolongado, sin provocar incomodidad o irritaciones.\n' +
        'De fácil montaje y disponible en variada gama de colores, con manual de instrucciones.'
    },
    {
      id: 4,
      titulo: 'Higienizante de manos para niños 45 ml',
      link: 'higienizante-de-manos-para-niños-45-ml',
      categoria: 'otros',
      precio: 8600,
      cantidad: 1,
      imagen: 'higienizante-de-manos-sin-aclarado-moras-45ml.jpg',
      descripcion: 'Gel limpiador de manos MORAS sin aclarado. Gel anti bacteriano o hand sanitizer con aroma a Moras.'
    },
    {
      id: 5,
      titulo: 'Reloj inteligente medidor de temperatura corporal',
      link: 'reloj-inteligente-medidor-de-temperatura-corporal',
      categoria: 'electronicos',
      precio: 85000,
      cantidad: 1,
      imagen: 'reloj-inteligente-medicion-temperatura-para-medir-continuamente-la-temperatura-corporal.jpg',
      descripcion: 'Brazalete inteligente multifunción con medición automática de temperatura corporal cada 5 minutos y sincronización de valores en App para un control de registro de temperatura, monitorización de frecuencia cardíaca, despertador y multitud de funciones más que lo convierten en el gadget perfecto para el día a día. Conexión Bluetooth® 4.0, con batería integrada recargable mediante cable USB. Cuerpo en material TPU y pantalla a color TFT integrada de 0,96 pulgadas . APP disponible para iOS y Android. Presentado en atractiva caja de diseño.'
    },
    {
      id: 6,
      titulo: 'Caja esterilizadora - Elimina microorganismos y bacterias',
      link: 'lampara-esterilizadora-de-luz-ultravioleta',
      categoria: 'electronicos',
      precio: 130000,
      cantidad: 1,
      imagen: 'lampara-esterilizadora-de-luz-ultravioleta.jpg',
      descripcion: 'Caja esterilizadora de luz ultravioleta tipo C. Especialmente diseñada para la eliminación de microorganismos y bacterias en objetos de uso cotidiano como el smartphone, llaves, gafas...\n' +
        'Fácil de usar, basta con introducir el objeto durante unos pocos minutos dentro de la caja. Potencia de bombilla 1W; longitud de onda de 270-280 nm y voltaje 5V, con alimentación mediante cable USB de 1m de largo. Fabricada en resistente material ABS de acabado mate y presentada en atractiva caja individual de diseño.\n' +
        'Tiempo de esterilización con función auto-apagado de 5 y 10 minutos.\n' +
        'Disponible manual de usuario en español e inglés.\n' +
        'Disponible certificación CE, RoHS y de efectividad germicida.\n' +
        'Para un uso adecuado del producto, evitar el contacto con la piel y los ojos.'
    }
  ];

  carrito = [];

  // SERVICIOS DEL CATÁLOGO Y DETALLE DE PRODUCTO
  agregarCarrito(producto: any): void {
    this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    this.carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    console.log('Carrito', this.carrito);
    alert('El producto ha sido agregado al carrito');
  }

  // SERVICIOS DEL CARRITO
  eliminarCarrito(i): any {
    this.carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    this.carrito.splice(i, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    console.log('Carrito', this.carrito);
    document.getElementById(i).innerHTML = '';
  }
}

