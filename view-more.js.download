// Get references to DOM elements
const viewMoreButton = document.querySelector(".port-btn");
const filterSection = document.querySelector(".container-f");
const additionalProjects = document.querySelectorAll(".portfolio-card.hidden");
const allProjects = document.querySelectorAll(".portfolio-card");
const viewMoreText = viewMoreButton.textContent;
const ScrollTo = document.querySelector(".section-portfolio");

// Function to toggle visibility of filter section and additional projects
function toggleViewMore() {
  if (filterSection.classList.contains("hidden")) {
    // Expanding view
    filterSection.classList.remove("hidden");
    additionalProjects.forEach((project) => project.classList.remove("hidden"));
    viewMoreButton.textContent = "Show Less";

    // Scroll to the filter section
    ScrollTo.scrollIntoView({ behavior: "smooth" });
  } else {
    // Collapsing view
    filterSection.classList.add("hidden");
    additionalProjects.forEach((project) => project.classList.add("hidden"));
    viewMoreButton.textContent = viewMoreText;

    // Reset all projects visibility
    allProjects.forEach((project) => (project.style.display = ""));

    // Uncheck all filter items
    document.querySelectorAll(".item-f").forEach((item) => {
      item.classList.remove("checked");
      item.classList.remove("active");
    });

    // Reset filter button text
    document.querySelector(".btn-text-f").innerText = "Tech Filter";

    // Scroll to the container-pt element
    ScrollTo.scrollIntoView({ behavior: "smooth" });
  }
}

// Add click event listener to "View More" button
viewMoreButton.addEventListener("click", toggleViewMore);
