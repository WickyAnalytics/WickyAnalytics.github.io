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

  document.addEventListener("DOMContentLoaded", function () {
    const timelineEvents = document.querySelectorAll(".timeline-event");
    const descriptionContainer = document.querySelector(".timeline-descriptions");
  
    // Add default text when the page loads
    descriptionContainer.innerHTML = `<p class="default-text">Click on a circle to view details.</p>`;
  
    timelineEvents.forEach((event) => {
      event.addEventListener("click", () => {
        const year = event.getAttribute("data-year");
        const degree = event.querySelector(".text-small").textContent;
  
        // Remove active class from all circles
        timelineEvents.forEach((e) => {
          e.querySelector(".circle").classList.remove("active-circle");
        });
  
        // Add active class to the clicked circle
        event.querySelector(".circle").classList.add("active-circle");
  
        // Update description content
        const descriptionContent = `
          <h3>${year} - "${degree}"</h3>
          ${getDescriptionForYear(year)}
        `;
        descriptionContainer.innerHTML = descriptionContent;
      });
    });
  
    function getDescriptionForYear(year) {
      switch (year) {
        case "2023":
          return `
            <ul>
              <li>Graduated with a <strong>Bachelor’s Degree in Computer and Information Technology</strong> from Future University.</li>
              <li>Developed an <strong>AI-based traffic rule violation detection system</strong> using YOLOv7, achieving <strong>95% accuracy</strong> (Grade A).</li>
            </ul>
          `;
        case "2024":
          return `
            <ul>
              <li>Started my <strong>Master's Degree in Software Engineering</strong> at Helwan University.</li>
              <li>Participated in the <strong>DEPI program</strong> as a Trainee, gaining expertise in <strong>SQL, Python, Power BI, and Google Sheets</strong>.</li>
              <li>Joined <strong>Andalusia Hospital</strong> as a <strong>Data Analyst</strong>:
                <ul>
                  <li>Improved HR and payroll data accuracy and streamlined operations.</li>
                </ul>
              </li>
            </ul>
          `;
        case "2025":
          return `
            <ul>
              <li>Expected to complete my <strong>Master's thesis</strong>: "Exploring advanced software solutions for data analysis and system optimization."</li>
              <li>Continued working as a <strong>Data Analyst</strong> at Andalusia Hospital, providing actionable insights for HR and payroll decision-making.</li>
            </ul>
          `;
        default:
          return "<p>No description available.</p>";
      }
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("click"); // Get the checkbox
    const navLinks = document.querySelectorAll(".header-ul .nav-link"); // Get all menu links
  
    // Add click event listeners to all menu links
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Uncheck the checkbox to close the menu
        checkbox.checked = false;
  
        // Smooth scroll to the target section
        const targetId = link.getAttribute("href"); // Get the target section ID
        if (targetId.startsWith("#")) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  });