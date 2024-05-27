function showMessage(course) {
  const messageText = document.getElementById('message-text');
  messageText.textContent = `Welcome to our ${course} course!`;
  const messageBox = document.getElementById('message');
  messageBox.style.display = 'block';
}

function closeMessage() {
  const messageBox = document.getElementById('message');
  messageBox.style.display = 'none';
}
