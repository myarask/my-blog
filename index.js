const showSection = (sectionId) => {
  // Show a single section based on the sectionId
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(sectionId).style.display = "block";
};

document.addEventListener("DOMContentLoaded", () => {
  // Show a single section based on the URL hash
  const sectionId = window.location.hash.replace("#", "") || "home";
  showSection(sectionId);
});
