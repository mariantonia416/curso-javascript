class Servicios {
    constructor(item, concepto, cantidad) {
        this.item = item,
            this.concepto = concepto,
            this.cantidad = cantidad,
            this.valor = 0
    }
    calculoValorServicio() {
        switch (this.concepto) {
            case 'pantalla':
                this.valor = 3000000 * this.cantidad
                break;
            case 'tarima':
                this.valor = 1000000 * this.cantidad
                break;
            case 'techo':
                this.valor = 1200000 * this.cantidad
                break;
            default:
                alert('No podemos cotizar este servicio')
                break;
        }
    }
}

let producto=[
    
    {
        'codigoItem': '001',
        'nombreItem': 'tarima',
        'precioItem': 1000000,
        'cantidadItem': 1
    },
    {
        'codigoItem': '002',
        'nombreItem': 'techo',
        'precioItem': 1200000,
        'cantidadItem': 1
    },{
        'codigoItem': '003',
        'nombreItem': 'pantalla',
        'precioItem': 3000000,
        'cantidadItem': 1
    }
];

function ordenarPorNombre() {
    producto.sort((a,b)=>{
        return a.nombreItem.localeCompare(b.nombreItem)
    });
    console.table(producto)
}

class Clientes {
    constructor(nombre, empresa, telefono, email,numeroItems) {
        this.nombre = nombre,
        this.empresa = empresa,
        this.telefono = telefono,
        this.email = email
    }
}

class ValorTotal {
    constructor (subtotal,iva,total) {
        this.subtotal = subtotal,
        this.iva = iva,
        this.total = total
    }
}

let datosCotizacion = {
    numeroCotizacion: String,
    numeroConsecutivo: String,
    fecha: String,
    elaborado: String,
    cliente: Clientes,
    servicio: [],
    total: ValorTotal,
    calculoSubTotal: function () {
        this.total.subtotal = 0;
        console.log('Ejecute la función calculoIva')
        for (i = 0; i < this.servicio.length; i++) {
            this.total.subtotal = this.total.subtotal + this.servicio[i].valor
           }
    },

    calculoIva: function () {
        this.total.iva = this.total.subtotal * 0.19;
        console.log('Ejecute la función calculoTotal')
    },

    calculoTotal: function () {
        this.total.total = this.total.subtotal + this.total.iva;
        console.log('El total de la cotización es ' + this.total.total)
    }
};

// datosCotizacion.cliente.nombreCompleto = prompt('Escribe tu nombre completo');
// datosCotizacion.cliente.empresa = prompt('Empresa donde laboras');
// datosCotizacion.cliente.telefono = prompt('Escribe tu numero de teléfono');
// datosCotizacion.cliente.email = prompt('Escribe tu email');
// let = numeroItems = prompt ('¿Cuántos items quieres cotizar?')

// let i;
// for (i = 0; i < numeroItems; i++) {
//     let concepto = prompt('¿Qué quieres cotizar?');
//     let cantidad = prompt('Cantidad requerida');
//     let x = new Servicios(i+1, concepto, cantidad)
//     x.calculoValorServicio()
//     datosCotizacion.servicio.push(x)
// }


datosCotizacion.numeroCotizacion = '001'
datosCotizacion.numeroConsecutivo = 'abc123'
datosCotizacion.fecha = '04/16/1990'
datosCotizacion.elaborado = 'Mariantonia Castaño'

console.log('Ejecute la función calculoValorServicio')

console.log('El cliente hizo la cotización de' + datosCotizacion.servicio.length + 'servicios')
