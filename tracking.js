(function () {
  window.dataLayer = window.dataLayer || [];

  window.fullButThirstyTrack = function (event, payload) {
    window.dataLayer.push({
      event,
      ...payload,
      timestamp: new Date().toISOString()
    });
  };

  document.addEventListener('click', function (event) {
    var target = event.target.closest('[data-track]');
    if (!target) return;

    window.fullButThirstyTrack('cta_click', {
      label: target.getAttribute('data-track'),
      text: target.textContent.trim(),
      page: 'author'
    });
  });
})();
