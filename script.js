document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    status.textContent = 'Enviando...';
    status.className = 'form-status';

    var data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          status.textContent = 'Gracias, recibimos tu consulta. Te vamos a responder a la brevedad.';
          status.className = 'form-status success';
          form.reset();
        } else {
          status.textContent = 'Hubo un problema al enviar el formulario. Probá de nuevo o escribinos directamente.';
          status.className = 'form-status error';
        }
      })
      .catch(function () {
        status.textContent = 'Hubo un problema al enviar el formulario. Probá de nuevo o escribinos directamente.';
        status.className = 'form-status error';
      });
  });
});