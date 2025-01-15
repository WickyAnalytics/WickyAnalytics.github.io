document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typewriter Effect
const typewriter = document.querySelector('.typewriter');
const textArray = ["Hello!", "Hola!", "Bonjour!", "Hallo!", "Ciao!", "Olá!"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typewriter.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex++;
    if (textIndex >= textArray.length) textIndex = 0;
    setTimeout(type, 500);
  }
}

type();

// Pagination Logic
const portfolioCards = document.querySelectorAll('.portfolio-card');
const pageButtons = document.querySelectorAll('.page-btn');

// Function to show only the cards for the selected page
function showPage(pageNumber) {
  portfolioCards.forEach(card => {
    if (card.getAttribute('data-page') === pageNumber.toString()) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  // Update active state of pagination buttons
  pageButtons.forEach(button => {
    if (button.getAttribute('data-page') === pageNumber.toString()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Event listeners for pagination buttons
pageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const pageNumber = button.getAttribute('data-page');
    showPage(pageNumber);
  });
});

// Show the first page by default
showPage(1);

// Smooth Scroll for Links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('click');
  const headerUl = document.querySelector('.header-ul');
  
  mobileMenuToggle.addEventListener('change', () => {
    if (mobileMenuToggle.checked) {
      headerUl.style.right = '0';
    } else {
      headerUl.style.right = '-100%';
    }
  });