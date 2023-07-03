// Get references to the necessary elements
var pass = document.getElementById("password"); // Password input field
var msg = document.getElementById("message"); // Message element to display password strength
var str = document.getElementById("strength"); // Element to display strength level
var toggleImg = document.getElementById("toggleImg"); // Toggle password visibility image

// Event listener to check password strength on input
pass.addEventListener('input', () => {
  var password = pass.value;
  var strength = 0;

  // Check if password contains lowercase letters
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }

  // Check if password contains uppercase letters
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }

  // Check if password contains numbers
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }

  // Check if password contains special characters
  if (password.match(/[!@#$%^&*()]+/)) {
    strength += 1;
  }

  // Check if password length exceeds 8 characters
  if (password.length > 8) {
    pass.value = password.slice(0, 8); // Truncate password to 8 characters
    password = pass.value;
    showToast("Password should be 8 characters or less");
}

  msg.style.display = "block"; // Display the password strength message

  // Update UI based on password strength
  if (strength === 0) {
    str.innerHTML = "Very Weak";
    pass.style.borderColor = "#ff5925"; // Set border color for very weak password
    msg.style.color = "#ff5925";
  } else if (strength === 1) {
    str.innerHTML = "Weak";
    pass.style.borderColor = "yellow"; // Set border color for weak password
    msg.style.color = "yellow";
  } else if (strength === 2) {
    str.innerHTML = "Medium";
    pass.style.borderColor = "orange"; // Set border color for medium password
    msg.style.color = "orange";
  } else if (strength >= 3) {
    str.innerHTML = "Strong";
    pass.style.borderColor = "#26d730"; // Set border color for strong password
    msg.style.color = "#26d730";
  }
});

// Function to display a toast message
function showToast(message) {
  var toast = document.createElement("div"); // Create a new div for the toast
  toast.classList.add("toast"); // Add CSS class to the div
  toast.innerText = message; // Set the message text
  document.body.appendChild(toast); // Append the toast to the document body

  // Remove the toast after 3 seconds
  setTimeout(function() {
    toast.remove();
  }, 3000);
}

// Event listener to toggle password visibility
toggleImg.addEventListener('click', () => {
  if (pass.type === "password") {
    pass.type = "text"; // Change input type to text to show the password
    toggleImg.setAttribute("src", "img/eye_off.png"); // Change the toggle image
  } else {
    pass.type = "password"; // Change input type back to password to hide the password
    toggleImg.setAttribute("src", "img/eye_on.png"); // Change the toggle image
  }
});
