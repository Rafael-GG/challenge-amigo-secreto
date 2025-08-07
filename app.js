// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigos = [];

function agregarAmigo() {

    // Obtener el nombre ingresado por el usuario
    let nombreValido = document.getElementById("amigo").value;

    if(nombreValido == "") {  // Validar que el nombre no esté vacío
        alert("El campo de amigos no puede estar vacio. Por favor, inserte un nombre.");
    } else if(nombreValido.length > 20) { //que no tenga más de 20 caracteres
        alert("El nombre del amigo no puede tener más de 20 caracteres.");
    } else if(nombreValido.length < 3) {  //que no tenga menos de 3 caracteres
        alert("El nombre del amigo debe tener al menos 3 caracteres."); // Si no es válido, mostrar un mensaje de error
    }else{
        nombreDeAmigos.push(document.getElementById("amigo").value);  // Si el nombre es válido, agregarlo al array nombreDeAmigos
        document.getElementById("amigo").value = "";  // Limpiar el campo de entrada después de agregar el amigo
        actualizarListaDeAmigos();  // Llamar a la función para actualizar la lista de amigos
        document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado anterior
        
    }
}

function actualizarListaDeAmigos() {

    document.getElementById("listaAmigos").innerHTML = ""; // Obtener el elemento de la lista y limpiarla para evitar duplicados

    //crear un bucle para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
    for(let i = 0; i < nombreDeAmigos.length; i++) {
        let amigo = document.createElement("li");
        amigo.textContent = nombreDeAmigos[i];
        document.getElementById("listaAmigos").appendChild(amigo);
    }
}

function sortearAmigo() {

    if(nombreDeAmigos.length === 0) {   //Validar que haya amigos disponibles
        alert("No hay amigos para sortear. Por favor, añada amigos primero.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * nombreDeAmigos.length);  //Generar un índice aleatorio
        let amigoSorteado = nombreDeAmigos[indiceAleatorio];  //Obtener el nombre sorteado
        document.getElementById("resultado").innerHTML = "Tu amigo secreto es: " + amigoSorteado; //Mostrar el resultado:
    }
}