'use strict';

document.addEventListener('DOMContentLoaded', function() {
  var dropdownList = document.querySelector('.for-dropdown');
  console.log(dropdownList);

  var dropdownMenu = document.querySelector('.dropdown');
  console.log(dropdownMenu);
  
  dropdownList.addEventListener('mouseover', showDropdown);
  dropdownList.addEventListener('mouseout', hideDropdown);
  function showDropdown() {
    dropdownMenu.style.display = 'block';
    console.log('pokazujemy');
  }

  function hideDropdown() {
    dropdownMenu.style.display = 'none';
    console.log('ukrywamy');
  }

});
// forDropdown.addEventListener('DOMContentLoaded',function() {
//     menu.style.display = 'block';

// });
