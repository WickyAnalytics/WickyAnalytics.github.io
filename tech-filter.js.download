document.addEventListener("DOMContentLoaded", function () {
  const selectBtn = document.querySelector(".select-btn-f");
  const items = document.querySelectorAll(".item-f");
  const portfolioCards = document.querySelectorAll(".portfolio-card");
  const btnText = document.querySelector(".btn-text-f");

  selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("checked");
      item.classList.toggle("active");
      updateFilterText();
      filterPortfolioCards();
    });
  });

  function updateFilterText() {
    const checked = document.querySelectorAll(".checked");
    if (checked && checked.length > 0) {
      btnText.innerText = `${checked.length} Selected`;
    } else {
      btnText.innerText = "Tech Filter";
    }
  }

  function filterPortfolioCards() {
    const checkedItems = document.querySelectorAll(".checked");

    if (checkedItems.length === 0) {
      portfolioCards.forEach((card) => (card.style.display = ""));
    } else {
      portfolioCards.forEach((card) => {
        const portfolioTech = card.querySelector(".portfolio-tech").textContent;
        let shouldDisplay = false;

        checkedItems.forEach((checkedItem) => {
          const selectedTechnology =
            checkedItem.querySelector(".item-text-f").textContent;
          if (portfolioTech.includes(selectedTechnology)) {
            shouldDisplay = true;
          }
        });

        card.style.display = shouldDisplay ? "" : "none";
      });
    }
  }
});
