const express = require("express");
const path = require("path");
const { Socket } = require("dgram");
const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const server = require("http").createServer(app);
const publicPath = path.resolve(__dirname, "../public");
const port = process.env.PORT || 3000;

//io mantiene una comunicacion con el servidor
app.use(express.static(publicPath));
 module.exports.io = require("socket.io")(server);
 require('../server/sockets/socket');


server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor corriendo en puerto ${port}`);
});
