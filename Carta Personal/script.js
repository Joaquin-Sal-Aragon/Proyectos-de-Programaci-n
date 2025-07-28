const card = document.getElementById('carta-movible');
let isDragging = false;
let offsetX, offsetY;
let originalX, originalY;

card.addEventListener('mousedown', (e) => {
  isDragging = true;

  // Guarda la posición original
  originalX = card.offsetLeft;
  originalY = card.offsetTop;

  offsetX = e.clientX - card.offsetLeft;
  offsetY = e.clientY - card.offsetTop;
  card.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    card.style.left = `${e.clientX - offsetX}px`;
    card.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    card.style.cursor = 'grab';

    // Vuelve a la posición original con una animación
    card.style.transition = 'top 0.3s ease, left 0.3s ease';
    card.style.left = `${originalX}px`;
    card.style.top = `${originalY}px`;

    // Elimina la transición después de que termine (opcional)
    setTimeout(() => {
      card.style.transition = '';
    }, 300);
  }
});
