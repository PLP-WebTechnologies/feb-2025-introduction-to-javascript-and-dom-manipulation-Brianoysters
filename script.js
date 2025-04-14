// Change text and style
document.getElementById("change-text-btn").addEventListener("click", () => {
  const textElement = document.getElementById("dynamic-text");
  textElement.textContent = "The content has been updated!";
  textElement.classList.toggle("highlight");
});

// Add/Remove Element
document.getElementById("toggle-element-btn").addEventListener("click", () => {
  const extraInfo = document.getElementById("extra-info");
  extraInfo.style.display = extraInfo.style.display === "none" ? "block" : "none";
});
