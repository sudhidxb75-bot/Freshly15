/* Freshly V3.2.2 Location Dropdown Hotfix
   Purpose: fixes Set your Freshly location dropdown without changing the existing app.js/backend. */
(function () {
  'use strict';

  function addFallbackStyle() {
    if (document.getElementById('freshly-location-hotfix-style')) return;
    var style = document.createElement('style');
    style.id = 'freshly-location-hotfix-style';
    style.textContent = [
      '.location-dropdown-panel.open{display:block!important;visibility:visible!important;opacity:1!important;}',
      '.location-dropdown{position:relative;}',
      'body.location-panel-open .location-dropdown-panel.open{display:block!important;}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function bindLocationDropdownHotfix() {
    addFallbackStyle();

    var toggle = document.querySelector('[data-location-toggle]');
    var panel = document.querySelector('[data-location-panel]');
    var wrap = document.querySelector('.location-dropdown');

    if (!toggle || !panel || toggle.dataset.freshlyLocationHotfix === '1') return;
    toggle.dataset.freshlyLocationHotfix = '1';

    function isOpen() {
      return panel.classList.contains('open');
    }

    function openPanel() {
      panel.classList.add('open');
      panel.classList.remove('show');
      document.body.classList.add('location-panel-open');
      toggle.setAttribute('aria-expanded', 'true');
    }

    function closePanel() {
      panel.classList.remove('open');
      panel.classList.remove('show');
      document.body.classList.remove('location-panel-open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (isOpen()) closePanel();
      else openPanel();
    });

    panel.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
      if (isOpen() && wrap && !wrap.contains(event.target)) closePanel();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isOpen()) closePanel();
    });

    console.log('Freshly V3.2.2 location dropdown hotfix loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindLocationDropdownHotfix);
  } else {
    bindLocationDropdownHotfix();
  }
})();
