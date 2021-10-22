let producto = []

$.get('http://my-json-server.typicode.com/mariantonia416/curso-javascript/productos', function (response) {
    producto = response
    llenarDesplegable(producto)
}) 

class Servicios {
    constructor(item, concepto, cantidad) {
        this.item = item,
        this.concepto = concepto,
        this.cantidad = cantidad,
        this.valor = 0
    }
}

let cotizacion = []
function llenarTabla (contenido) {
    let tabla = $('#tabla tbody')
    let fila = '' 
    contenido.map(item => {
        fila = '<tr>' +
        '<th scope="row">' + item.item + '</th>' +
        '<td>' + item.concepto + '</td>' +
        '<td>' + item.cantidad + '</td>' +
        '<td>' + item.valor + '</td>' +
        '</tr>';
    })
    tabla.append(fila);
}

function llenarDesplegable (contenido) {
    let desplegable = $('#desplegable')
    let option = '' 
    contenido.map(item => {
        option += `<option value="${item.codigoItem}">${item.nombreItem}</option>`
    })
    desplegable.append(option);
}

let btn = $('#boton')
$(document).ready(function(){
    btn.click((e) => {
        e.preventDefault()     
        let dropdown = $('#desplegable')
        let quantity = $('#cantidad')
        let name = producto.filter(x => x.codigoItem == dropdown.val())[0].nombreItem;
        let tablaProductos = new Servicios(dropdown.val(), name, quantity.val());
        let precio = producto.filter(x => x.codigoItem == dropdown.val())[0].precioItem;
        tablaProductos.valor = precio * quantity.val()
        cotizacion.push (tablaProductos)
        llenarTabla(cotizacion)
        $('#tabla').fadeOut('slow', function(){
            $('#tabla').fadeIn('1000');
        });
    })
})


