document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('content');
  const links = document.querySelectorAll('nav a');

  // Function to load HTML content
  function loadContent(url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        mainContent.innerHTML = data;
      })
      .catch(error => console.error('Error loading content:', error));
  }

  // Load default content (home page)
  loadContent('courses.html');

  // Add event listeners to navigation links
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.getAttribute('href');
      loadContent(page);
      window.history.pushState(null, null, page);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    const path = window.location.pathname.substring(1);
    loadContent(path || 'courses.html');
  });
});
