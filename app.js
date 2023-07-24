const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;
const doctoresRouter = require('./routes/doctores')(db);
const pacientesRouter = require('./routes/pacientes')(db);
const citasRouter = require('./routes/citas')(db);

app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'root', 
  database: 'proyecto12db2' 
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conexión a la base de datos establecida');
});

// Rutas para los formularios de doctores, pacientes y citas
app.use('/doctores', doctoresRouter);
app.use('/pacientes', pacientesRouter);
app.use('/citas', citasRouter);

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la página de inicio!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
