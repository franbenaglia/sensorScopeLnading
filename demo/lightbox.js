// Ampliación de capturas con <dialog>, sin dependencias. Cada miniatura es un
// <button> con data-full (imagen grande) y el pie de foto como texto.
(function () {
  var dialog = document.getElementById('lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return; // sin <dialog>: las miniaturas siguen visibles

  var image = dialog.querySelector('img');
  var caption = dialog.querySelector('.caption');

  document.addEventListener('click', function (event) {
    var trigger = event.target.closest && event.target.closest('[data-full]');
    if (trigger) {
      var thumb = trigger.querySelector('img');
      image.src = trigger.getAttribute('data-full');
      image.alt = thumb ? thumb.alt : '';
      caption.textContent = trigger.getAttribute('data-caption') || '';
      dialog.showModal();
      return;
    }
    // Un clic fuera de la imagen (en el fondo) o en el botón cierra.
    if (event.target === dialog || (event.target.closest && event.target.closest('[data-close]'))) {
      dialog.close();
    }
  });

  dialog.addEventListener('close', function () {
    image.removeAttribute('src');
  });
})();
