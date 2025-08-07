// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigos = [];

function agregarAmigo() {
    // Obtener el nombre ingresado por el usuario
    // Validar que el nombre no esté vacío, tenga más de 20 caracteres o menos de 3 caracteres
    // Si el nombre es válido, agregarlo al array nombreDeAmigos
    // Si no es válido, mostrar un mensaje de error correspondiente
    // Limpiar el campo de entrada después de agregar el amigo


    if(document.getElementById("amigo").value == "") {
        alert("El campo de amigos no puede estar vacio. Por favor, inserte un nombre.");
    } else if(document.getElementById("amigo").value.length > 20) {
        alert("El nombre del amigo no puede tener más de 20 caracteres.");
    } else if(document.getElementById("amigo").value.length < 3) {
        alert("El nombre del amigo debe tener al menos 3 caracteres.");
    }else{
        nombreDeAmigos.push(document.getElementById("amigo").value);
        document.getElementById("amigo").value = "";
        actualizarListaDeAmigos();
        
    }
}

function actualizarListaDeAmigos() {

    document.getElementById("listaAmigos").innerHTML = ""; // Obtener el elemento de la lista y limpiarla para evitar duplicados

    //Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
    for(let i = 0; i < nombreDeAmigos.length; i++) {
        let amigo = document.createElement("li");
        amigo.textContent = nombreDeAmigos[i];
        document.getElementById("listaAmigos").appendChild(amigo);
    }
}
