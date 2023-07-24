const express = require('express');
const router = express.Router();

// Controlador para guardar un nuevo paciente en la base de datos
router.post('/nuevo', (req, res) => {
  const { nombre, cedula, apellido, edad, telefono } = req.body;
  const sql = 'INSERT INTO pacientes (nombre, cedula, apellido, edad, telefono) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, cedula, apellido, edad, telefono], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al guardar el paciente en la base de datos' });
    } else {
      res.status(201).json({ message: 'Paciente guardado exitosamente' });
    }
  });
});

// Controlador para obtener el listado de pacientes desde la base de datos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM pacientes';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al obtener el listado de pacientes desde la base de datos' });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = (db) => router;