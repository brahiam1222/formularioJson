const isbn = document.getElementById('isbn').value;
const fecha = document.getElementById('fecha').value;
const nombre = document.getElementById('nombre').value;
const editorial = document.getElementById('editorial').value;
const genero = document.getElementById('genero').value;
const sinopsis = document.getElementById('sinopsis').value;
const portada = document.getElementById('portada').value;
const precio = document.getElementById('precio').value;
const stock = document.getElementById('stock').value;
const autor = document.getElementById('autor').value;

console.log(document.getElementById('isbn').value);
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection("libros").add({
        isbn: isbn,
        fecha: fecha,
        nombre: nombre,
        editorial: editorial,
        genero: genero,
        sinopsis: sinopsis,
        portada: portada,
        precio: precio,
        stock: stock,
        autor: autor

})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
})
}
);