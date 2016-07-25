document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementsByClassName('dropdown')[0];
  element.onclick = dropdownClicked;
  element.onmouseout = function() {
    closeDropdown(element);
  };
});

function dropdownClicked(e) {
  var dropdown = e.target;
  dropdown.classList.add('show');

  setTimeout(function () {
    dropdown.onclick = function(e) {
      e.stopPropagation();
    };
    window.onclick = closeDropdown;
  }, 0);
}

function closeDropdown(dropdown) {
     dropdown.classList.remove('show');
     dropdown.onclick = dropdownClicked;
     window.onclick = null;
}
