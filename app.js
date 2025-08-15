//Crear un array para almacenar los nombres
let nombresIngresados = [];

//Función para agregar amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == "") {
        console.log("Escriba un nombre nombre válido");
    }else {
        nombresIngresados.push(nombreAmigo);
    }
    limpiarCaja();
    console.log(nombresIngresados);

}

function limpiarCaja () {
   document.querySelector('#amigo').value = '';
   
}
