// Obtener los elementos necesarios
const imagenes = document.querySelectorAll('.certificado-item');
const lightbox = document.getElementById('lightbox-2');
const lightboxImg = document.getElementById('lightbox-img');

// Iterar sobre los videos y agregar eventos para hover y clic
imagenes.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});


// Función para abrir el lightbox con el video seleccionado
function openLightbox(index) {
  lightbox.style.display = 'block';
  lightboxImg.src = imagenes[index].src;
}



// Función para cerrar el lightbox
function closeLightbox() {
  lightbox.style.display = 'none';
  lightboxImg.src = ''; // Detener el video al cerrar el lightbox
}



const digit1 = document.getElementById('digit1');
const digit2 = document.getElementById('digit2');
const digit3 = document.getElementById('digit3');
const odometerContainer = document.querySelector('.odometer');

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function updateOdometer(value) {
  const numberString = value.toString().padStart(3, '0');
  digit1.textContent = numberString[0];
  digit2.textContent = numberString[1];
  digit3.textContent = numberString[2];

}

function generateRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

function animateOdometer(finalValue) {
  const startTime = Date.now();
  const duration = 4000; // 4 seconds

  function update() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const progress = elapsedTime / duration;

    if (progress < 1) {
      const randomValue = generateRandomNumber();
      updateOdometer(randomValue);
      requestAnimationFrame(update);
    } else {
      // Animation complete, set the final value
      updateOdometer(finalValue);
    }
  }

  update();
}

// Agregar un evento de desplazamiento (scroll)
window.addEventListener('scroll', function () {
  if (isElementInViewport(odometerContainer)) {
    // Iniciar la animación cuando el odómetro es visible
    animateOdometer(680);
    // Eliminar el evento de desplazamiento después de iniciar la animación (opcional)
    window.removeEventListener('scroll', arguments.callee);
  }
});
