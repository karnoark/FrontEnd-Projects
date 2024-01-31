function validateForm() {
    // Get form values
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Reset previous error messages
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // Perform validation
    var isValid = true;

    if (email === "") {
      document.getElementById("emailError").innerHTML = "Email is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").innerHTML = "Invalid email format";
      isValid = false;
    }

    if (password === "") {
      document.getElementById("passwordError").innerHTML = "Password is required";
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    // A simple email validation function
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const btn = document.querySelector('button');
btn.addEventListener('click', validateForm)
