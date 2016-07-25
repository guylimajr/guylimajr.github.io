document.addEventListener('DOMContentLoaded', function() {
  var element = document.getElementsByClassName('dropdown')[0];
  element.onclick = dropdownClicked;
  element.onmouseleave = function(e) {
    closeDropdown(element);
  };
});

function dropdownClicked(e) {
  var dropdown = e.target;
  dropdown.classList.add('show');
  console.log('show');
  e.stopPropagation();
  setTimeout(function () {
    document.body.onclick = function() {
      closeDropdown(dropdown);
    };
  }, 0);
}

function closeDropdown(dropdown) {
      console.log('hide');
     dropdown.classList.remove('show');
     dropdown.onclick = dropdownClicked;
     document.onclick = null;
}
