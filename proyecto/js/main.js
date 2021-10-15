let producto = [
    
    {
        'codigoItem': '001',
        'nombreItem': 'Tarima',
        'precioItem': 1000000
    },
    {
        'codigoItem': '002',
        'nombreItem': 'Techo',
        'precioItem': 1200000
    },{
        'codigoItem': '003',
        'nombreItem': 'Pantalla',
        'precioItem': 3000000        
    },
    {
        'codigoItem': '004',
        'nombreItem': 'Camara',
        'precioItem': 800000        
    },
    {
        'codigoItem': '005',
        'nombreItem': 'Pabellón',
        'precioItem': 1000000        
    }
];

class Servicios {
    constructor(item, concepto, cantidad) {
        this.item = item,
        this.concepto = concepto,
        this.cantidad = cantidad,
        this.valor = 0
    }
    calculoValorServicio() {
        
    }
};

let cotizacion = [];

function llenarTabla (contenido) {
    let tabla = $('#tabla')
    let fila = '' 
    contenido.map(item => {
        fila += `<tr><th scope="row">${item.item}</th><td>${item.concepto}</td><td>${item.cantidad}</td><td>${item.valor}</td></tr>`
    })
    tabla.tBodies[0].innerHTML = fila;
};

function llenarDesplegable (contenido) {
    let desplegable = $('#desplegable')
    let option = '' 
    contenido.map(item => {
        option += `<option value="${item.codigoItem}">${item.nombreItem}</option>`
    })
    desplegable.innerHTML = option;
};


llenarDesplegable(producto);

let btn = $('#boton');

$(document).ready(function(){
    btn.click((e) => {
        e.preventDefault();
        let dropdown = $('#desplegable');
        let quantity = $('#cantidad');
        let name = producto.filter(x => x.codigoItem == dropdown.value)[0].nombreItem;
        let tablaProductos = new Servicios(dropdown.value, name, quantity.value);
        let precio = producto.filter(x => x.codigoItem == dropdown.value)[0].precioItem;
        tablaProductos.valor = precio * quantity.value;
        cotizacion.push (tablaProductos);
        llenarTabla(cotizacion);
    });
});
