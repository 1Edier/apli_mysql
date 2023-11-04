const express = require("express");
const usuarioRoute = express.Router();

const {
  obtenerPedido,
  obtenerPedidos,
  ingresarPedido,
  actualizarPedido,
  eliminarPedido,
} = require("../controllers/usuarios.controller");


// Rutas para pedidos
usuarioRoute.get("/pedidos", obtenerPedidos);
usuarioRoute.get("/pedidos/:pedidoId", obtenerPedido);
usuarioRoute.post("/pedidos", ingresarPedido);
usuarioRoute.put("/pedidos/:pedidoId", actualizarPedido);
usuarioRoute.delete("/pedidos/:pedidoId", eliminarPedido);

module.exports = usuarioRoute;
