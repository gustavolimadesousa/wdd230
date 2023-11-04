function checkPasswordMatch(confirmPasswordInput) {
  var passwordInput = document.getElementById("password");
  var confirmPassword = confirmPasswordInput.value;
  var password = passwordInput.value;

  if (password === confirmPassword) {
      confirmPasswordInput.setCustomValidity("");
  } else {
      confirmPasswordInput.setCustomValidity("Passwords do not match");
      passwordInput.value = "";
      confirmPasswordInput.value = "";
      passwordInput.focus();
  }
}

function updateValue(val) {
  document.getElementById("ratingOutput").textContent = val;
}

