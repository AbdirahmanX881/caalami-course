document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Basic validation
  if (!email || !password) {
      errorMessage.textContent = 'Please fill in both fields.';
      errorMessage.style.display = 'block';
      return;
  }

  // Clear error message if both fields are filled
  errorMessage.style.display = 'none';

  // Simulate login process
  alert(`Logged in with email: ${email}`);
});
