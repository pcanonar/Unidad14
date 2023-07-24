// Función para realizar una solicitud GET y obtener los datos de los doctores
function obtenerDoctores() {
  fetch('/api/doctores') // Reemplaza '/api/doctores' con la ruta correcta para obtener los datos de los doctores desde el backend
    .then((response) => response.json())
    .then((data) => {
      // Aquí procesa los datos obtenidos y muestra los doctores en el DOM
      // Por ejemplo, puedes crear una tabla para mostrar los doctores
      const tablaDoctores = document.getElementById('tablaDoctores');
      tablaDoctores.innerHTML = ''; // Limpia la tabla antes de agregar nuevos datos

      data.forEach((doctor) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${doctor.nombre}</td>
          <td>${doctor.apellido}</td>
          <td>${doctor.especialidad}</td>
          <td>${doctor.consultorio}</td>
          <td>${doctor.correo}</td>
        `;
        tablaDoctores.appendChild(row);
      });
    })
    .catch((error) => console.error('Error al obtener los doctores:', error));
}

// Función para realizar una solicitud GET y obtener los datos de las personas
function obtenerPersonas() {
  fetch('/api/personas') // Reemplaza '/api/personas' con la ruta correcta para obtener los datos de las personas desde el backend
    .then((response) => response.json())
    .then((data) => {
      // Aquí procesa los datos obtenidos y muestra las personas en el DOM
      // Por ejemplo, puedes crear una tabla para mostrar las personas
      const tablaPersonas = document.getElementById('tablaPersonas');
      tablaPersonas.innerHTML = ''; // Limpia la tabla antes de agregar nuevos datos

      data.forEach((persona) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${persona.nombre}</td>
          <td>${persona.cedula}</td>
          <td>${persona.apellido}</td>
          <td>${persona.edad}</td>
          <td>${persona.telefono}</td>
        `;
        tablaPersonas.appendChild(row);
      });
    })
    .catch((error) => console.error('Error al obtener las personas:', error));
}

// Función para realizar una solicitud GET y obtener los datos de las citas médicas
function obtenerCitasMedicas() {
  fetch('/api/citas') // Reemplaza '/api/citas' con la ruta correcta para obtener los datos de las citas desde el backend
    .then((response) => response.json())
    .then((data) => {
      // Aquí procesa los datos obtenidos y muestra las citas en el DOM
      // Por ejemplo, puedes crear una tabla para mostrar las citas médicas
      const tablaCitas = document.getElementById('tablaCitas');
      tablaCitas.innerHTML = ''; // Limpia la tabla antes de agregar nuevos datos

      data.forEach((cita) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${cita.numeroDocumentoPaciente}</td>
          <td>${cita.especialidad}</td>
        `;
        tablaCitas.appendChild(row);
      });
    })
    .catch((error) => console.error('Error al obtener las citas médicas:', error));
}

// Ejecuta las funciones para obtener y mostrar los datos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  obtenerDoctores();
  obtenerPersonas();
  obtenerCitasMedicas();
});
