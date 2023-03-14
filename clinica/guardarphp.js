function guardarphp() {
  // Obtener los valores del input
  var paciente1 = document.getElementById("paciente1").value;
  var w3review = document.getElementById("w3review").value;
  // Crear un objeto FormData con los datos a enviar
  var datos = new FormData();
  datos.append("paciente1", paciente1);
  datos.append("w3review", w3review);

  // Crear una solicitud AJAX
  var xhr = new XMLHttpRequest();
  // Especificar el método y la URL del archivo PHP que recibirá los datos
  xhr.open("POST", "odontograma.php");
  // Enviar la solicitud con los datos
  xhr.send(datos);
}
