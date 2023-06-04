var waitNotice = document.getElementById('waitNotice');

function showWaitNotice() {
    waitNotice.classList.remove('hidden');
}

function hideWaitNotice() {
    waitNotice.classList.add('hidden');
}

document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
  
    if (username === "admin" && password === "password") {
        window.location.href = 'signedin.html';
    } else if (username === "admin") {
        document.getElementById('errorMessage').textContent = 'Incorrect password.';
    } else if (password === "password") {
        document.getElementById('errorMessage').textContent = 'Incorrect username.';
    } else {
        document.getElementById('errorMessage').textContent = 'Incorrect username and password.';
    }
  });



