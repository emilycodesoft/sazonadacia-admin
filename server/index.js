const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'SazonaDacia',
});

connection.connect();

// Middleware para parsear el cuerpo de las solicitudes HTTP
app.use(express.json());

// CRUD para la tabla "clientes"
app.get('/clientes', (req, res) => {
  connection.query('SELECT * FROM clientes', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/clientes/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM clientes WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

app.post('/clientes', (req, res) => {
  const { nombre, apellido, email, telefono, direccion } = req.body;
  connection.query('INSERT INTO clientes (nombre, apellido, email, telefono, direccion) VALUES (?, ?, ?, ?, ?)', [nombre, apellido, email, telefono, direccion], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.put('/clientes/:id', (req, res) => {
  const { nombre, apellido, email, telefono, direccion } = req.body;
  const { id } = req.params;
  connection.query('UPDATE clientes SET nombre = ?, apellido = ?, email = ?, telefono = ?, direccion = ? WHERE id = ?', [nombre, apellido, email, telefono, direccion, id], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.delete('/clientes/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM clientes WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// CRUD para la tabla "productos"
app.get('/productos', (req, res) => {
  connection.query('SELECT * FROM productos', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM productos WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

app.post('/productos', (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  connection.query('INSERT INTO productos (nombre, descripcion, precio) VALUES (?, ?, ?)', [nombre, descripcion, precio], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.put('/productos/:id', (req, res) => {
  const { nombre