document.addEventListener('DOMContentLoaded', () => {
    // Crear contenedor principal
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    // Crear el mensaje de bienvenida
    alert('¡Bienvenido a la página principal!');

    // Preguntar el nombre del usuario
    const userName = prompt('Por favor, ingresa tu nombre:');

    if (userName) {
        alert(`¡Hola, ${userName}! Bienvenido a la página.`);

        // Crear un mensaje con el nombre del usuario
        const welcomeMessage = document.createElement('h2');
        welcomeMessage.textContent = `¡Hola, ${userName}! Bienvenido a la página principal.`;
        container.appendChild(welcomeMessage);
    } else {
        alert('No ingresaste un nombre.');

        // Si no se ingresa un nombre, mostrar un mensaje genérico
        const welcomeMessage = document.createElement('h2');
        welcomeMessage.textContent = '¡Bienvenido a la página principal!';
        container.appendChild(welcomeMessage);
    }

    // Descripción de las otras páginas
    const description = document.createElement('p');
    description.textContent = "Esta es la página principal. Aquí puedes navegar a las siguientes páginas:";
    container.appendChild(description);

    // Crear botones para ir a otras páginas
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const buttons = [
        { text: 'INICIO', link: 'index.html' },
        { text: 'Ir a Página 2', link: 'pagina2.html' },
        { text: 'Ir a Página 3', link: 'pagina3.html' },
    ];

    buttons.forEach(buttonInfo => {
        const button = document.createElement('button');
        button.classList.add('animated-button');
        button.textContent = buttonInfo.text;
        button.addEventListener('click', () => {
            location.href = buttonInfo.link;
        });
        buttonContainer.appendChild(button);
    });

    container.appendChild(buttonContainer);
});
