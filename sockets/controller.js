

const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente Desconectado', socket.id);
    })
    
    // callback es la funcion de lo que quiere hacer cuando el cliente mande el mensaje
    socket.on('enviar-mensaje', ( payload, callback ) => {               
        const id = 123456;
        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload);
    })

}

module.exports = {
    socketController
}