const Pedido = require('../models/pedido.model');

// Otras importaciones y funciones existentes

const obtenerPedidos = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const perPage = parseInt(req.query.perPage) || 10;
    const pedidos = await Pedido.findAll({
      attributes: ['pedidoId', 'fecha', 'hora', 'estado'],
      limit: perPage,
      offset: (page - 1) * perPage,
    });

    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const obtenerPedido = async (req, res) => {
  const { pedidoId } = req.params;
  try {
    const pedido = await Pedido.findByPk(pedidoId);

    if (pedido) {
      res.json(pedido);
    } else {
      res.status(404).json({ message: 'Pedido no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const ingresarPedido = async (req, res) => {
  try {
    const nuevoPedido = await Pedido.create(req.body);
    res.json(nuevoPedido);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const actualizarPedido = async (req, res) => {
  const { pedidoId } = req.params;
  try {
    const [actualizado] = await Pedido.update(req.body, { where: { pedidoId } });
    if (actualizado) {
      res.json({ mensaje: 'Pedido actualizado exitosamente' });
    } else {
      res.status(404).json({ error: 'Pedido no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const eliminarPedido = async (req, res) => {
  const { pedidoId } = req.params;
  try {
    const eliminado = await Pedido.destroy({ where: { pedidoId } });
    if (eliminado) {
      res.json({ mensaje: 'Pedido eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Pedido no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
 
  obtenerPedidos,     // Funciones para pedidos
  obtenerPedido,      // Funciones para pedidos
  ingresarPedido,     // Funciones para pedidos
  actualizarPedido,   // Funciones para pedidos
  eliminarPedido,    // Funciones para pedidos
};
