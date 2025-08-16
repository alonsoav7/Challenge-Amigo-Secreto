//Crear un array para almacenar los nombres
let nombresIngresados = [];


//Función para agregar amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo == "") {
        alert("Ingrese un nombre nombre válido");
    }else {
        nombresIngresados.push(nombreAmigo);
               
    }
    limpiarCaja();
    console.log(nombresIngresados);
    actualizaLista();
}

//Función para actualizar lista de amigos

function actualizaLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for(let i=0; i < nombresIngresados.length; i++){
        let li = document.createElement("li");
        let p = document.createElement("p");
        let contenido = `${nombresIngresados[i]}`
        p.appendChild(document.createTextNode(contenido));
        li.appendChild(p);
        lista.appendChild(li);
    }
}

//Función para limpiar caja

function limpiarCaja () {
   document.querySelector('#amigo').value = '';
   
}

//Función para sortear amigo

function sortearAmigo() {
    if (nombresIngresados.length > 0){
        let numeroAleatorio = Math.floor(Math.random()*nombresIngresados.length);
        let lista = document.getElementById('resultado');
        let li = document.createElement("li");
        let p = document.createElement("p");
        let contenido = `El amigo secreto sorteado es: ${nombresIngresados[numeroAleatorio]}`
        p.appendChild(document.createTextNode(contenido));
        li.appendChild(p);
        lista.appendChild(li);
        
    } else {
        alert('Aún no has ingresado suficientes nombres');
    }
contenido = "";    
}