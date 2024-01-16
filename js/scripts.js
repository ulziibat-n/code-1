(function () {
  'use strict';

  console.log('hello world');
  var link = document.querySelectorAll('.nav-link');
  if (link) {
    link.forEach(function (item) {
      item.addEventListener('click', function (e) {
        console.log(e.currentTarget);
      });
    });
  }
})();
