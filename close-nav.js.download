 // Function to scroll to the target section smoothly
  function scrollToSection(target) {
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Function to close the mobile menu with a delay
  function closeMobileMenuWithDelay() {
    const checkbox = document.getElementById('click');
    if (checkbox.checked) {
      setTimeout(() => {
        checkbox.checked = false;
      }, 500); // Adjust the duration (in milliseconds) as needed
    }
  }

  // Add click event listeners to the navigation links
  const scrollLinks = document.querySelectorAll('.scroll-link');
  scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default link behavior
      const target = link.getAttribute('href'); // Get the target section ID
      scrollToSection(target); // Scroll to the target section
      closeMobileMenuWithDelay(); // Close the mobile menu with a delay
    });
  });
