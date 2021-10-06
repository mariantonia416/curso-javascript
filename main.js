let btn = document.getElementById('boton');
let contenedor = document.createElement('div');
let textArea = document.getElementById('textArea');

btn.onclick = (e) => {
    let txt = document.createElement('p');
    let nombreProducto = document.createTextNode(textArea.value);
    txt.appendChild(nombreProducto);
    contenedor.appendChild(txt);
    document.body.appendChild(contenedor);
    textArea.value = '';
}
textArea.onfocus = (e) => {
 textArea.value = '';
}

let form = document.getElementById('formulario')
form.addEventListener('submit', validarFormulario)

function validarFormulario(e) {
    e.preventDefault();
}
