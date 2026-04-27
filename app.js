(function () {
  var form = document.getElementById('signup-form');
  var year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  if (!form) return;

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'lead_form_submit',
        form_id: 'signup-form',
        page: window.location.pathname
      });
    }
  });
})();
