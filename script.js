document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navTabs = document.getElementById("navTabs");

  if (menuToggle && navTabs) {
    menuToggle.addEventListener("click", () => {
      navTabs.classList.toggle("open");
    });
  }

  // User Search Simulation
  const searchBtn = document.getElementById("searchBtn");
  const userSearchInput = document.getElementById("userSearch");

  if (searchBtn && userSearchInput) {
    searchBtn.addEventListener("click", () => {
      const handle = userSearchInput.value.trim();
      if (handle) {
        alert(`Navigating to LeetForces user profile: ${handle}`);
      } else {
        alert("Please enter a valid handle name.");
      }
    });

    userSearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchBtn.click();
      }
    });
  }
});