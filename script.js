document.addEventListener('DOMContentLoaded', function() {
  document.body.onclick = function () {};
  var element = document.getElementsByClassName('dropdown')[0];
  element.onclick = dropdownClicked;
  element.onmouseleave = function(e) {
    closeDropdown(element);
  };
});

function dropdownClicked(e) {
  var dropdown = e.target;
  dropdown.classList.add('show');
  e.stopPropagation();
  setTimeout(function () {
    window.onclick = function() {
      closeDropdown(dropdown);
    };
    window.touchstart = function() {
      closeDropdown(dropdown);
    }
  }, 0);
}

function closeDropdown(dropdown) {
  dropdown.classList.remove('show');
  dropdown.onclick = dropdownClicked;
  window.onclick = null;
}
