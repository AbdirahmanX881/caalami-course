document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Basic validation
  if (!username || !email || !password) {
      errorMessage.textContent = 'Please fill in all fields.';
      errorMessage.style.display = 'block';
      return;
  }

  // Clear error message if all fields are filled
  errorMessage.style.display = 'none';

  // Simulate registration process
  alert(`Registered with username: ${username}, email: ${email}`);
});
