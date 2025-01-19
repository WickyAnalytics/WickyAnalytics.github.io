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
        case "2019":
          return `
            <ul>
              <li>Finished high school with a score of <strong>90%</strong>.</li>
              <li>Enrolled in <strong>Future University</strong> to pursue a <strong>Bachelor’s Degree in Computer and Information Technology</strong>.</li>
            </ul>
          `;
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
    });})
// FILTER FUNCTION----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const selectBtn = document.querySelector(".select-btn-f");
  const listItems = document.querySelector(".list-items-f");
  const items = document.querySelectorAll(".item-f");
  const portfolioCards = document.querySelectorAll(".portfolio-card");
  const btnText = document.querySelector(".btn-text-f");
  const applyFilterBtn = document.querySelector(".apply-filter-btn");
  const clearFilterBtn = document.querySelector(".clear-filter-btn");
  const paginationContainer = document.querySelector(".pagination");
  const cardsPerPage = 6; // Number of cards to display per page

  let currentPage = 1; // Track the current page

  // Toggle filter dropdown
  selectBtn.addEventListener("click", () => {
    listItems.classList.toggle("show");
    selectBtn.classList.toggle("open");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!selectBtn.contains(event.target) && !listItems.contains(event.target)) {
      listItems.classList.remove("show");
      selectBtn.classList.remove("open");
    }
  });

  // Handle filter selection
  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked"); // Toggle selected state
      updateFilterText(); // Update the filter button text
    });
  });

  // Apply filter button
  applyFilterBtn.addEventListener("click", () => {
    currentPage = 1; // Reset to the first page when applying a new filter
    filterAndPaginateProjects(); // Filter and paginate projects
  });

  // Clear filter button
  clearFilterBtn.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("checked"); // Deselect all filters
    });
    currentPage = 1; // Reset to the first page when clearing filters
    updateFilterText(); // Update the filter button text
    filterAndPaginateProjects(); // Reset project display
  });

  // Update filter text
  function updateFilterText() {
    const checked = document.querySelectorAll(".checked");
    if (checked && checked.length > 0) {
      btnText.innerText = `${checked.length} Selected`;
    } else {
      btnText.innerText = "Tech Filter";
    }
  }

  // Filter and paginate projects
  function filterAndPaginateProjects() {
    const checkedItems = document.querySelectorAll(".checked");

    // Filter projects based on selected technologies
    const filteredCards = Array.from(portfolioCards).filter((card) => {
      if (checkedItems.length === 0) return true; // Show all cards if no filters are selected

      const cardTech = card.querySelector(".portfolio-tech").textContent.toLowerCase();
      return Array.from(checkedItems).some((checkedItem) => {
        const selectedTechnology = checkedItem.querySelector(".item-text-f").textContent.toLowerCase();
        return cardTech.includes(selectedTechnology);
      });
    });

    // Update pagination based on filtered cards
    updatePagination(filteredCards);

    // Show the current page of filtered cards
    showPage(filteredCards, currentPage);
  }

  // Update pagination buttons
  function updatePagination(filteredCards) {
    const totalPages = Math.ceil(filteredCards.length / cardsPerPage); // Calculate total pages
    paginationContainer.innerHTML = ""; // Clear existing buttons

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.className = "page-btn";
      button.setAttribute("data-page", i);
      button.textContent = i;
      paginationContainer.appendChild(button);
    }

    // Add event listeners to pagination buttons
    paginationContainer.querySelectorAll(".page-btn").forEach((button) => {
      button.addEventListener("click", () => {
        currentPage = parseInt(button.getAttribute("data-page"));
        filterAndPaginateProjects(); // Show the selected page
      });
    });

    // Highlight the active page button
    highlightActivePageButton();
  }

  // Show the cards for the current page
  function showPage(filteredCards, page) {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    portfolioCards.forEach((card) => {
      card.style.display = "none"; // Hide all cards by default
    });

    filteredCards.slice(startIndex, endIndex).forEach((card) => {
      card.style.display = ""; // Show cards for the current page
    });

    // Highlight the active page button
    highlightActivePageButton();
  }

  // Highlight the active page button
  function highlightActivePageButton() {
    paginationContainer.querySelectorAll(".page-btn").forEach((button) => {
      button.classList.remove("active");
      if (parseInt(button.getAttribute("data-page")) === currentPage) {
        button.classList.add("active");
      }
    });
  }

  // Initialize on page load
  filterAndPaginateProjects();
});