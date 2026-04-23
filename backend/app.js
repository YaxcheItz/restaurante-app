const express = require('express');
const app = express();

app.use(express.json());

let productos = [
    { id: 1, nombre: "Pizza", precio: 120 },
    { id: 2, nombre: "Hamburguesa", precio: 90 }
];

let pedidos = [];

// GET productos
app.get('/productos', (req, res) => {
    res.json(productos);
});

// POST pedido
app.post('/pedido', (req, res) => {
    pedidos.push(req.body);
    res.json({ mensaje: "Pedido guardado" });
});

// GET pedidos
app.get('/pedidos', (req, res) => {
    res.json(pedidos);
});

// servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});