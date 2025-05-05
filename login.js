document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-message");
  
    if (username === "admin" && password === "1234") {
      alert("Login successful!");
      errorMsg.textContent = "";
      window.location.href = "index.html";
    } else {
      errorMsg.textContent = "Invalid username or password!";
    }
  });
  
  document.getElementById("togglePassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
  });
  