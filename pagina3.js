document.addEventListener('DOMContentLoaded', () => {
    // Crear contenedor principal
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    // Mensaje de bienvenida
    alert('¡Bienvenido a la página de tabla interactiva!');

    // Crear encabezado de bienvenida
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.id = 'welcome-message';
    welcomeMessage.textContent = 'Tabla Interactiva';
    container.appendChild(welcomeMessage);

    // Crear tabla
    const table = document.createElement('table');
    table.classList.add('interactive-table');

    // Crear encabezados de columna
    const headers = ['OPERACIÓN', 'DESCRIPCIÓN', 'BOTONES'];
    const headerRow = document.createElement('tr');

    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        th.classList.add('animated-header');
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    // Crear filas con datos y botones
    const operations = [
        { operation: 'Suma', description: 'Calcula la suma de dos números' },
        { operation: 'Resta', description: 'Calcula la resta de dos números' },
        { operation: 'Multiplicación', description: 'Calcula el producto de dos números' },
        { operation: 'División', description: 'Calcula la división de dos números' }
    ];

    operations.forEach(op => {
        const row = document.createElement('tr');

        // Columna de operación
        const operationCell = document.createElement('td');
        operationCell.textContent = op.operation;
        row.appendChild(operationCell);

        // Columna de descripción
        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = op.description;
        row.appendChild(descriptionCell);

        // Columna de botón
        const buttonCell = document.createElement('td');
        const button = document.createElement('button');
        button.textContent = 'Calcular';
        button.classList.add('calc-button');
        button.addEventListener('click', () => {
            // Interacción con el usuario al presionar el botón
            const num1 = parseFloat(prompt(`Ingresa el primer número para la ${op.operation.toLowerCase()}:`));
            const num2 = parseFloat(prompt(`Ingresa el segundo número para la ${op.operation.toLowerCase()}:`));

            if (isNaN(num1) || isNaN(num2)) {
                alert('Por favor, ingresa valores válidos.');
            } else {
                let result;
                switch (op.operation) {
                    case 'Suma':
                        result = num1 + num2;
                        break;
                    case 'Resta':
                        result = num1 - num2;
                        break;
                    case 'Multiplicación':
                        result = num1 * num2;
                        break;
                    case 'División':
                        result = num2 !== 0 ? num1 / num2 : 'Error: División entre cero.';
                        break;
                }
                alert(`El resultado de la ${op.operation.toLowerCase()} es: ${result}`);
            }
        });
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);

        table.appendChild(row);
    });

    container.appendChild(table);

    // Crear botones para otras páginas
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
