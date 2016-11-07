(function() {
  'use strict';

  var navToggle = document.getElementById('navToggle');
  var navClose = document.getElementById('navClose');
  var nav = document.getElementById('nav');

  navToggle.addEventListener('click', function() {
    nav.classList.add('is-open');
  });
  navClose.addEventListener('click', function() {
    nav.classList.remove('is-open');
  });

})();
