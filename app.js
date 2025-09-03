// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function validarEntrada() {
    let amigo = document.getElementById("amigo").value;

    if (amigo === "") {
        alert("Ingrese un nombre válido");
    } else {
        listaAmigos.push(amigo);
        document.getElementById("amigo").value = ""; 
        actualizarListaAmigos(); 
    }
    console.log(listaAmigos);
}

function actualizarListaAmigos() {
    
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    
    for (let i = 0; i < listaAmigos.length; i++) {
     
        let li = document.createElement("li");  
        li.textContent = listaAmigos[i];        
        listaHTML.appendChild(li);                 
}};

function sortearAmigo() {
    if (listaAmigos.length > 0) {
        let indice = Math.floor(Math.random() * listaAmigos.length);
        let elegido = listaAmigos[indice];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo secreto es: " + elegido;
        return elegido;
    }else{
        alert("No hay amigos en la lista");
    }
    
}