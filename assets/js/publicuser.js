//CHECKING OR VALIDATION PARA SA PAG SIGN IN AND KAPAG NAG SIGN UP, MAREREDIRECT SA SIGN UP PAGE OR POP-UP (KUNG GAGAWIN NATING POP-UP)

var waitNotice = document.getElementById('waitNotice');

function showWaitNotice() {
    waitNotice.classList.remove('hidden');
}

function hideWaitNotice() {
    waitNotice.classList.add('hidden');
}

document.getElementById("signin_Form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  if (email === "haru22@gmail.com" && password === "password") {
      window.location.href = 'customer_signedin.html';
  } else if (email === "admin") {
      document.getElementById('errorMessage').textContent = 'Incorrect password.';
  } else if (password === "password") {
      document.getElementById('errorMessage').textContent = 'Email not found in records.';
  } else {
      document.getElementById('errorMessage').textContent = 'Email and password not match.';
  }

});

document.getElementById("signupButton").addEventListener("click", function() {
  // Redirect to sign-up page
  window.location.href = 'signUpCustomer.html';
});

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.querySelector(".toggle-password i");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  }
  $('.dropdown').on('click', function (event) {
    event.stopPropagation(); // Prevent event bubbling
    var parentElement = $(this).closest('.form-group');
    var dropdownMenu = parentElement.find('.dropdown-menu');

    // Close all other dropdowns
    $('.dropdown-menu').not(dropdownMenu).removeClass('open');

    // Toggle the clicked dropdown
    dropdownMenu.toggleClass('open');
});

$('.dropdown-item').on('click', function () {
    var value = $(this).text();
    var inputField = $(this).closest('.dropdown').find('input');
    inputField.val(value);
    $(this).closest('.dropdown-menu').removeClass('open');
});