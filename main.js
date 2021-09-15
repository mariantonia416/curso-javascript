let edad = prompt ('¿Cuántos años tienes?');

// for (edad; edad < 8; edad++) {
//     console.log(edad)   
// }

while (edad != 'ESC') {
    if (edad < 12) {
        alert('El juego no está permitido para menores de 12 años')
    }
    else {
        switch (edad) {
            case '11':
            alert ('Podrás jugar cuando cumplas 12 años')
            break;

            case '12':
            alert ('Puedes empezar a jugar')
            break;

            default:
            alert ('El juego solo está permitido para mayores de 12 años')
            break;
        }
    }
    edad = prompt ('¿Cuántos años tienes?');
}