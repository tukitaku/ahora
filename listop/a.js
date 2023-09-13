function mostrarFoto(rutaImagen) {
    const overlay = document.getElementById('overlay');
    const imagenAmpliada = document.getElementById('imagen-ampliada');
  
    imagenAmpliada.src = rutaImagen;
    overlay.style.display = 'block';
  }
  
  function ocultarFoto(event) {
    const overlay = document.getElementById('overlay');
    const imagenAmpliada = document.getElementById('imagen-ampliada');
  
    // Si el evento proviene del botón de cierre, ocultar la foto
    if (event.target.classList.contains('cerrar')) {
      imagenAmpliada.classList.remove('mostrar-imagen');
      overlay.style.display = 'none';
    }
  }