

var socket = io();
//conectado al servidor 
 socket.on('connect',function(){
    console.log('Conectado al servidor');
});
//aparecera cuando se desconecte el servidor
socket.on('disconnect',function(){
    console.log('Se perdio conexion con el servidor');
})

//enviando informacion
socket.emit('enviarMensaje',{
    usuario:'eduardo',
    mensaje:'hola mundo'
},function(resp){
    console.log('mensaje del servidor:',resp);
});

//escuchar informacion

socket.on('enviarMensaje', mensaje =>{
    console.log(mensaje);
});
