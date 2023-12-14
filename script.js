// Obtener los elementos necesarios
const videos = document.querySelectorAll('.video-item');
const lightbox = document.getElementById('lightbox');
const lightboxVideo = document.getElementById('lightbox-video');


// Iterar sobre los videos y agregar eventos
videos.forEach((video, index) => {
  video.addEventListener('click', () => openLightbox(index));
});



// Función para abrir el lightbox con el video seleccionado
function openLightbox(index) {
  lightbox.style.display = 'block';
  lightboxVideo.src = videos[index].src;
}

// Función para cerrar el lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
  lightboxVideo.pause(); // Pausar el video en el lightbox al cerrar
  lightboxVideo.currentTime = 0;
  lightboxVideo.src = '';
}
