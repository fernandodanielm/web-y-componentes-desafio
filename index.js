function main(){
    document.addEventListener('DOMContentLoaded', () => {
        const menuButton = document.querySelector('.header__menu');
        const closeButton = document.querySelector('#cerrarMenu');
        const menu = document.querySelector('#menuDesplegable');
    
        menuButton.addEventListener('click', () => {
            menu.style.display = 'flex';
        });
    
        closeButton.addEventListener('click', () => {
            menu.style.display = 'none';
        });

        console.log('menuButton:', menuButton);
    console.log('closeButton:', closeButton);
    console.log('menu:', menu);

    menuButton.addEventListener('click', () => {
        console.log('Botón de menú clickeado');
        menu.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        console.log('Botón de cerrar menú clickeado');
        menu.style.display = 'none';
    });
    });

    document.querySelector('.form').addEventListener('submit', function(event) {
        event.preventDefault(); 
    
        const nombre = document.getElementById('nombre').value; 
        const email = document.getElementById('email').value; 
        const mensaje = document.getElementById('mensaje').value; 
    
        const url = 'https://apx.school/api/utils/email-to-student';

        console.log('Datos a enviar:', JSON.stringify(data));

    
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify({ 
                to: email, 
                message: `Nombre: ${nombre}\nMensaje: ${mensaje}` 
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Email enviado con éxito!'); 
            } else {
                alert('Error al enviar el email.'); 
            }
        })
        .catch(error => {
            console.error('Error:', error); 
        });
    });
    
    
}

main();