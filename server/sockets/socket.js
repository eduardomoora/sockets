const {io} = require('../server')

//verificar las conneciones
io.on('connection', (client) => {
    //on para escuchar procesos
       console.log('cliente conectado');
      // enviando mensaje a cliente
       client.emit('enviarMensaje', {
          usuario:'admin',
          mensaje:'Bienvenido a esta aplicacion'
            
  
       });
       client.on('disconnect',()=>{
       console.log('usuario desconectado');
      });
  
         //escuchando al cliente
      client.on('enviarMensaje',(data,callback) =>{
        
         client.broadcast.emit('enviarMensaje',data);





     /*  if (mensaje.usuario) {
        callback({
          resp:'todo salio bien'
        });
      } else {
        callback({
          resp:'todo salio mal'
        });
      } */
  
  
  })
  });