function toggleSkill(index) {
    const description = document.getElementById(`description-${index}`);
    const arrow = document.querySelector(`#description-${index}`).previousElementSibling.querySelector('.arrow');
  
    if (description.style.display === "block") {
      description.style.display = "none";
      arrow.textContent = "▼"; // Down arrow
    } else {
      description.style.display = "block";
      arrow.textContent = "▲"; // Up arrow
    }
  }
  