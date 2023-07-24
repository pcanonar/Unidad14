Create database proyecto12db2;
-- Tabla de doctores
CREATE TABLE doctores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  especialidad ENUM('Medicina general', 'Cardiología', 'Medicina interna', 'Dermatología', 'Rehabilitación física', 'Psicología', 'Odontología', 'Radiología') NOT NULL,
  consultorio VARCHAR(10) NOT NULL,
  correo VARCHAR(100) NOT NULL
);
-- Tabla de pacientes
CREATE TABLE pacientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  cedula VARCHAR(15) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  edad INT NOT NULL,
  telefono VARCHAR(15) NOT NULL
);

-- Tabla de citas médicas
CREATE TABLE citas_medicas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_paciente INT NOT NULL,
  id_doctor INT NOT NULL,
  especialidad ENUM('Medicina general', 'Cardiología', 'Medicina interna', 'Dermatología', 'Rehabilitación física', 'Psicología', 'Odontología', 'Radiología') NOT NULL,
  FOREIGN KEY (id_paciente) REFERENCES pacientes(id),
  FOREIGN KEY (id_doctor) REFERENCES doctores(id)
);
SHOW databases