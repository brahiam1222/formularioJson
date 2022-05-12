const isbn = document.getElementById('isbn');
const fecha = document.getElementById('fecha');
const nombre = document.getElementById('nombre');
const editorial = document.getElementById('editorial');
const genero = document.getElementById('genero');
const sinopsis = document.getElementById('sinopsis');
const portada = document.getElementById('portada');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');
const autor = document.getElementById('autor');

console.log(document.getElementById('isbn').value);
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection("libros").add({
        isbn: isbn.value,
        fecha: fecha.value,
        nombre: nombre.value,
        editorial: editorial.value,
        genero: genero.value,
        sinopsis: sinopsis.value,
        portada: portada.value,
        precio: precio.value,
        stock: stock.value,
        autor: autor.value

})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
})
}
);