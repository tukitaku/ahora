// Seleccionamos todos los elementos que contengan la clase .image
const image = document.querySelectorAll('.image');

// creamos un ciclo for of para cada uno de nuestras imagenes del array y el .entries nos devolvera la propiedad clave:valor
for (let [i, imageSelected] of image.entries()) {
    // Luego le decimos al image seleccionado que ejecute la función focus que a su vez ejecutara el resetFocus el cual eliminara la clase active de cualquiera de las imagenes del array, luego al image seleccionado le agregara la clase active
    imageSelected.addEventListener('click', function focus(){
        resetFocus();
        imageSelected.classList.toggle('active')
    })
}

function resetFocus() {
    image.forEach(i => i.classList.remove('active'))
}