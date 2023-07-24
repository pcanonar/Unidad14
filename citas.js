const express = require('express');
const router = express.Router();

// Controlador para guardar una nueva cita médica en la base de datos
router.post('/nueva', (req, res) => {
  const { id_paciente, id_doctor, especialidad } = req.body;
  const sql = 'INSERT INTO citas_medicas (id_paciente, id_doctor, especialidad) VALUES (?, ?, ?)';
  db.query(sql, [id_paciente, id_doctor, especialidad], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al guardar la cita médica en la base de datos' });
    } else {
      res.status(201).json({ message: 'Cita médica guardada exitosamente' });
    }
  });
});

// Controlador para obtener el listado de citas médicas desde la base de datos
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM citas_medicas';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Error al obtener el listado de citas médicas desde la base de datos' });
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = (db) => router;