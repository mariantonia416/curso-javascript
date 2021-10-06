let nombreProducto = prompt('Ingresa el nombre del producto que deseas cotizar');

item = document.createElement('p');

item.innerHTML = 'Nombre del producto: ' + nombreProducto;
document.body.appendChild(item);

let cantidad = prompt('Ingresa el nombre del producto que deseas cotizar');

itemCantidad = document.createElement('p');

itemCantidad.innerHTML = 'Cantidad: ' + cantidad;
document.body.appendChild(itemCantidad);
