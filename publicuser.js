//CHECKING OR VALIDATION PARA SA PAG SIGN IN AND KAPAG NAG SIGN UP, MAREREDIRECT SA SIGN UP PAGE OR POP-UP (KUNG GAGAWIN NATING POP-UP)

var waitNotice = document.getElementById('waitNotice');

function showWaitNotice() {
    waitNotice.classList.remove('hidden');
}

function hideWaitNotice() {
    waitNotice.classList.add('hidden');
}

document.getElementById("signinpublicForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  if (email === "haru22@gmail.com" && password === "password") {
      window.location.href = 'HomeSignedIn.html';
  } else if (email === "haru22@gmail.com") {
      document.getElementById('errorMessage').textContent = 'Incorrect password.';
  } else if (password === "password") {
      document.getElementById('errorMessage').textContent = 'Email not found in records.';
  } else {
      document.getElementById('errorMessage').textContent = 'Email and password not found in records.';
  }

});

document.getElementById("signupButton").addEventListener("click", function() {
  // Redirect to sign-up page
  window.location.href = 'signUpCustomer.html';
});

$('.dropdown').on('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling
    var parentElement = $(this).closest('.form-group');
    var dropdownMenu = parentElement.find('.dropdown-menu');

    // Close all other dropdowns
    $('.dropdown-menu').not(dropdownMenu).removeClass('open');

    // Toggle the clicked dropdown
    dropdownMenu.toggleClass('open');
});
