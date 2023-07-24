const express = require('express');
const router = express.Router();

// Controlador para guardar un nuevo doctor en la base de datos
router.post('/nuevo', (req, res) => {
  const { nombre, apellido, especialidad, consultorio, correo } = req.body;
  const sql = 'INSERT INTO doctores (nombre, apellido, especialidad, consultorio, correo) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, especialidad, consultorio, correo], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al guardar el doctor en la base de datos' });
    } else {
      res.status(201).json({ message: 'Doctor guardado exitosamente' });
    }
  });
});

// Controlador para obtener el listado de doctores desde la base de datos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM doctores';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al obtener el listado de doctores desde la base de datos' });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = (db) => router;
