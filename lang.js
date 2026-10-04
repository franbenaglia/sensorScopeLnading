// Shows the page in Spanish or English. Order of preference: ?lang= in the URL,
// the choice saved by the buttons, then the browser language.
(function () {
  var KEY = 'sensorscope-lang';

  function saved() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    var buttons = document.querySelectorAll('.lang button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-pressed', String(buttons[i].value === lang));
    }
    var title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.content;
  }

  var fromUrl = new URLSearchParams(location.search).get('lang');
  var choice = fromUrl || saved() || (navigator.language || 'en').slice(0, 2);
  apply(choice === 'es' ? 'es' : 'en');

  document.addEventListener('click', function (event) {
    var button = event.target.closest && event.target.closest('.lang button');
    if (!button) return;
    apply(button.value);
    try {
      localStorage.setItem(KEY, button.value);
    } catch (e) {
      // Storage may be blocked; the choice then lasts for this page only.
    }
  });
})();
