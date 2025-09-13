// Run after the page fully loads
window.onload = function () {
  welcomeMessage();
};

function welcomeMessage() {
  let username = prompt("Please enter your name:");

  if (username && username.trim() !== "") {
    document.getElementById("welcome-user").innerText = username;
  } else {
    // Fallback if user clicks Cancel or leaves blank
    document.getElementById("welcome-user").innerText = "Guest";
  }
}

// Form handling
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let outputDiv = document.getElementById("form-output");

  // Simple validation
  if (name === "" || email === "" || message === "") {
    outputDiv.innerHTML = "<p class='text-red-500'>All fields must be filled out.</p>";
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!email.match(emailPattern)) {
    outputDiv.innerHTML = "<p class='text-red-500'>Please enter a valid email address.</p>";
    return;
  }

  // Display submitted data
  outputDiv.innerHTML = `
    <h3 class="text-xl font-semibold">Form Submitted:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  // Reset form
  document.getElementById("contact-form").reset();
});
