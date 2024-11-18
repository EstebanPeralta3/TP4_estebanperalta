// script.js

document.addEventListener('DOMContentLoaded', () => {
    alert('¡Bienvenido a la galería!');
    const age = prompt('Por favor, ingresa tu edad:');

    if (age > 20) {
        alert('Eres mayor de 20 años.');
    } else {
        alert('Eres menor o igual a 20 años.');
    }
});
