 // Function to handle smooth scrolling to anchor links
 function scrollToAnchor(anchor) {
    const target = document.querySelector(anchor);
    if (target) {
      const offset = 80; // Adjust this value to control the space at the top
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }

  // Add a click event listener to each anchor link
  const anchorLinks = document.querySelectorAll('.scroll-link');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');
      scrollToAnchor(href);
    });
  });