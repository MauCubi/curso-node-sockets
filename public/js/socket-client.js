// Referencias HTML
const labelOnline = document.querySelector('#lblOnline');
const labelOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

// on es para estar escuchando algun evento en socket.io
socket.on('connect', () => {
    //console.log('Conectado');
    labelOffline.style.display = 'none';
    labelOnline.style.display = '';
});

socket.on('disconnect', () => {
    //console.log('Desconectado');
    labelOnline.style.display = 'none';
    labelOffline.style.display = '';
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})


btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    // Emitir eventos
    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id);
    } );
})