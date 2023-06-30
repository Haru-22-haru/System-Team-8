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
  } else if (email === "haru22@gmail.com") {
      document.getElementById('errorMessage').textContent = 'Incorrect password.';
  } else if (password === "password") {
      document.getElementById('errorMessage').textContent = 'Email not found in records.';
  } else {
      document.getElementById('errorMessage').textContent = 'Email and password not found in records.';
  }

});

document.getElementById("signUpLink").addEventListener("click", function() {
  // Redirect to sign-up page
  window.location.href = 'signup_customer.html';
});
