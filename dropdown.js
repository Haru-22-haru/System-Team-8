$('.Dropdown').on('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling
    var parentElement = $(this).closest('.form-group');
    var dropdownMenu = parentElement.find('.Dropdown-menu');

    // Close all other dropdowns
    $('.Dropdown-menu').not(dropdownMenu).removeClass('open');

    // Toggle the clicked dropdown
    dropdownMenu.toggleClass('open');
});

$('.Dropdown-item').on('click', function () {
    var value = $(this).text();
    var inputField = $(this).closest('.Dropdown').find('input');
    inputField.val(value);
    $(this).closest('.Dropdown-menu').removeClass('open');
});

function closeDropdown() {
    var dropdown = document.getElementById('myDropdown'); // Replace 'myDropdown' with the ID of your dropdown element
    dropdown.classList.remove('show'); // Assuming you're using CSS to show/hide the dropdown
  }

function nextPage() {
    // Code to handle the next page or form submission
    alert("Next button clicked!");
}

  $('.dropdown-item').on('click', function () {
    var value = $(this).text();
    var inputField = $(this).closest('.dropdown').find('input');
    inputField.val(value);
    $(this).closest('.dropdown-menu').removeClass('open');
});