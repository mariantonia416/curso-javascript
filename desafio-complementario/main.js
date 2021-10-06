const datos = ['Codigo de producto','Nombre del Producto', 'Precio del Producto', 'Cantidad']

let contenedor = document.getElementById('contenedor');
var titulo = document.createElement('h1');

let lista = document.createElement('ul');

titulo.innerText = 'Cotización';
contenedor.appendChild(titulo);

datos.map(x => {
    let item = document.createElement('li');
    let txt = document.createTextNode(x);
    item.className = 'datos';
    item.appendChild(txt);
    lista.appendChild(item);
});

contenedor.appendChild(lista);


