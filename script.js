document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Simulate a loading time
  setTimeout(function() {
    loader.style.display = 'none';
    content.style.display = 'block';
  },1000); // Change this time to however long you want the loader to show
});
