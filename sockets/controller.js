const socketController = (socket) => {
  console.log("Cliente conectado: ", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado: ", socket.id);
  });

  socket.on("enviar-mensaje", (payload, callback) => {
    const id = 123456789;
    // this.io.emit('enviar-mensaje', payload);
    // console.log(payload);
    socket.broadcast.emit('enviar-mensaje', payload);

    callback(id);
  });
};

module.exports = {
  socketController,
};
